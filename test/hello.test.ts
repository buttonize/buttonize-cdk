import * as cdk from 'aws-cdk-lib'
import { Duration } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs'
import { ButtonizeApiKey, ButtonizeLambdaEventSource } from '../src'

export class Buttonize extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id)

		ButtonizeApiKey.setDefaultApiKey(this, 'asdasda')

		const handler = new Function(this, 'LambdaHandler', {
			functionName: 'karel',
			code: Code.fromInline('exports.handler = async () => {return `hello`}'),
			runtime: Runtime.NODEJS_14_X,
			handler: 'index.handler',
			timeout: Duration.minutes(2),
			logRetention: RetentionDays.THREE_MONTHS
		})

		handler.addEventSource(
			new ButtonizeLambdaEventSource(
				{
					name: 'asda',
					type: 'button'
				},
				{ apiKey: 'asda' }
			)
		)

		handler.addEventSource(
			new ButtonizeLambdaEventSource(
				{
					name: 'cvxcvxcvx',
					type: 'button'
				},
				{ apiKey: 'mbklvjkoejriopq' }
			)
		)
	}
}

describe('ProcessorStack', () => {
	test('synthesizes the way we expect', () => {
		const app = new cdk.App()

		// Since the ProcessorStack consumes resources from a separate stack
		// (cross-stack references), we create a stack for our SNS topics to live
		// in here. These topics can then be passed to the ProcessorStack later,
		// creating a cross-stack reference.
		const testStack = new cdk.Stack(app, 'TestStack')

		new Buttonize(testStack, 'buttonizeshit')

		// Prepare the stack for assertions.
		const template = Template.fromStack(testStack)

		console.log(JSON.stringify(template, null, 2))
	})
})
