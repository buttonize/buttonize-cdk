import * as path from 'path'
import { Duration, Fn, Stack } from 'aws-cdk-lib'
import {
	Effect,
	PolicyDocument,
	PolicyStatement,
	Role,
	ServicePrincipal
} from 'aws-cdk-lib/aws-iam'
import { Code, Runtime, SingletonFunction } from 'aws-cdk-lib/aws-lambda'
import { RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs'

export class ButtonizeCustomResourceProvider extends Construct {
	static readonly CUSTOM_RESOURCE_PROVIDER_ID: string =
		'ButtonizeCustomResourceProvider'
	static readonly SINGLETON_LAMBDA_UUID: string =
		'1815f1e0-e2af-4b7e-8c56-1521ae6a025b'

	public static getOrCreateProvider(
		scope: Construct
	): ButtonizeCustomResourceProvider {
		const stack = Stack.of(scope)

		const provider =
			(stack.node.tryFindChild(
				ButtonizeCustomResourceProvider.CUSTOM_RESOURCE_PROVIDER_ID
			) as ButtonizeCustomResourceProvider) ??
			new ButtonizeCustomResourceProvider(stack)

		return provider
	}

	public readonly serviceToken: string

	protected constructor(scope: Construct) {
		super(scope, ButtonizeCustomResourceProvider.CUSTOM_RESOURCE_PROVIDER_ID)

		const functionName = `${
			Stack.of(this).stackName
		}-buttonize-custom-resource-handler`

		const role = new Role(this, 'LambdaRole', {
			assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
			inlinePolicies: {
				'buttonize-custom-resources-lambda': new PolicyDocument({
					statements: [
						new PolicyStatement({
							effect: Effect.ALLOW,
							actions: ['logs:CreateLogStream', 'logs:CreateLogGroup'],
							resources: [
								Fn.sub(
									`arn:\${AWS::Partition}:logs:\${AWS::Region}:\${AWS::AccountId}:log-group:${functionName}*:*`
								)
							]
						}),
						new PolicyStatement({
							effect: Effect.ALLOW,
							actions: ['logs:PutLogEvents'],
							resources: [
								Fn.sub(
									`arn:\${AWS::Partition}:logs:\${AWS::Region}:\${AWS::AccountId}:log-group:${functionName}*:*:*`
								)
							]
						})
					]
				})
			}
		})

		const handler = new SingletonFunction(this, 'LambdaHandler', {
			functionName,
			role,
			code: Code.fromAsset(path.join(__dirname, 'custom-resource')),
			runtime: Runtime.NODEJS_14_X,
			handler: 'handler.handler',
			uuid: ButtonizeCustomResourceProvider.SINGLETON_LAMBDA_UUID,
			lambdaPurpose: 'buttonize-custom-resource-handler',
			timeout: Duration.minutes(2),
			logRetention: RetentionDays.THREE_MONTHS
		})

		this.serviceToken = handler.functionArn
	}
}
