import { App, Stack, Duration } from 'aws-cdk-lib'
import { Match, Template } from 'aws-cdk-lib/assertions'
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { ButtonizeLambdaEventSource } from '../src/ButtonizeLambdaEventSource'

describe('ButtonizeLambdaEventSource', () => {
	it('should pass with API key', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		const handler = new Function(testStack, 'LambdaHandler', {
			functionName: 'karel',
			code: Code.fromInline('exports.handler = async () => {return `hello`}'),
			runtime: Runtime.NODEJS_14_X,
			handler: 'index.handler',
			timeout: Duration.minutes(2)
		})

		handler.addEventSource(
			new ButtonizeLambdaEventSource(
				{
					name: 'asda',
					type: 'button'
				},
				{ apiKey: 'some-api-key' }
			)
		)

		const template = Template.fromStack(testStack)

		template.resourceCountIs('Custom::Buttonize', 1)
		template.resourceCountIs('AWS::IAM::Role', 2)
		template.resourceCountIs('AWS::Lambda::Function', 2)

		template.hasResourceProperties('Custom::Buttonize', {
			props: {
				'Fn::Join': [
					'',
					[
						'{"target":{"type":"lambda","lambdaArn":"',
						{
							'Fn::GetAtt': [Match.stringLikeRegexp('LambdaHandler'), 'Arn']
						},
						'"},"widget":{"name":"asda","type":"button"}}'
					]
				]
			},
			apiKey: 'some-api-key'
		})
	})
})
