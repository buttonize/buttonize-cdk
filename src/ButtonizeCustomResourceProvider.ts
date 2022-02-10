import * as path from 'path'
import { Duration, Fn, Stack } from 'aws-cdk-lib'
import {
	Effect,
	Policy,
	PolicyDocument,
	PolicyStatement,
	Role,
	ServicePrincipal
} from 'aws-cdk-lib/aws-iam'
import { Code, Runtime, SingletonFunction } from 'aws-cdk-lib/aws-lambda'
import { RetentionDays, LogRetention } from 'aws-cdk-lib/aws-logs'
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

	private readonly handler: SingletonFunction

	private readonly role: Role

	private defaultApiKey: string | boolean = false

	private get functionName(): string {
		return `${Stack.of(this).stackName}-buttonize-custom-resource-handler`
	}

	protected constructor(scope: Construct) {
		super(scope, ButtonizeCustomResourceProvider.CUSTOM_RESOURCE_PROVIDER_ID)

		this.role = new Role(this, 'LambdaRole', {
			assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
			inlinePolicies: {}
		})

		this.handler = new SingletonFunction(this, 'LambdaHandler', {
			functionName: this.functionName,
			role: this.role,
			code: Code.fromAsset(path.join(__dirname, 'custom-resource')),
			runtime: Runtime.NODEJS_14_X,
			handler: 'handler.handler',
			uuid: ButtonizeCustomResourceProvider.SINGLETON_LAMBDA_UUID,
			lambdaPurpose: 'buttonize-custom-resource-handler',
			timeout: Duration.minutes(2)
		})

		this.serviceToken = this.handler.functionArn
	}

	public setDefaultApiKey(apiKey: string): void {
		if (this.defaultApiKey !== false) {
			throw new Error(
				`Default Buttonize API key has been already set. (value="${this.defaultApiKey}")`
			)
		}

		this.handler.addEnvironment('DEFAULT_API_KEY', apiKey)
		this.defaultApiKey = apiKey
	}

	public enableLogs(
		retention: RetentionDays = RetentionDays.THREE_MONTHS
	): void {
		const logGroupName = `/aws/lambda/${this.functionName}`

		new LogRetention(this, 'LogRetention', {
			logGroupName,
			retention
		})

		this.role.attachInlinePolicy(
			new Policy(this, 'LogsPolicy', {
				policyName: 'buttonize-custom-resources-logs',
				document: new PolicyDocument({
					statements: [
						new PolicyStatement({
							effect: Effect.ALLOW,
							actions: ['logs:CreateLogStream', 'logs:CreateLogGroup'],
							resources: [
								Fn.sub(
									`arn:\${AWS::Partition}:logs:\${AWS::Region}:\${AWS::AccountId}:log-group:${logGroupName}:*`
								)
							]
						}),
						new PolicyStatement({
							effect: Effect.ALLOW,
							actions: ['logs:PutLogEvents'],
							resources: [
								Fn.sub(
									`arn:\${AWS::Partition}:logs:\${AWS::Region}:\${AWS::AccountId}:log-group:${logGroupName}:*:*`
								)
							]
						})
					]
				})
			})
		)
	}
}
