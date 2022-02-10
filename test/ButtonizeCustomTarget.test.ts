import { App, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { ButtonizeCustomTarget } from '../src/ButtonizeCustomTarget'

describe('ButtonizeCustomTarget', () => {
	it('should pass', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		new ButtonizeCustomTarget(
			testStack,
			'customTarget',
			{
				inputVtlTemplate: 'asda',
				outputVtlTemplate: 'dads',
				widget: {
					name: 'karel',
					type: 'button'
				}
			},
			{ apiKey: 'some-api-key' }
		)

		const template = Template.fromStack(testStack)

		template.resourceCountIs('Custom::Buttonize', 1)
		template.resourceCountIs('AWS::IAM::Role', 1)
		template.resourceCountIs('AWS::Lambda::Function', 1)

		template.hasResourceProperties('Custom::Buttonize', {
			props: JSON.stringify({
				target: {
					type: 'custom',
					inputVtlTemplate: 'asda',
					outputVtlTemplate: 'dads'
				},
				widget: {
					name: 'karel',
					type: 'button'
				}
			}),
			apiKey: 'some-api-key'
		})
	})
})
