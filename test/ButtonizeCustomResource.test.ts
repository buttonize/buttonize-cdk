import { App, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { ButtonizeCustomResource } from '../src/ButtonizeCustomResource'

describe('ButtonizeCustomResource', () => {
	it('should include API key', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		new ButtonizeCustomResource(testStack, 'customresource', {
			target: {
				type: 'lambda',
				lambdaArn: 'asda'
			},
			widget: {
				name: 'asda',
				type: 'button'
			},
			apiKey: 'some_api_key_here'
		})

		const template = Template.fromStack(testStack)

		template.resourceCountIs('Custom::Buttonize', 1)

		template.resourceCountIs('AWS::Lambda::Function', 1)

		template.hasResourceProperties('Custom::Buttonize', {
			props: JSON.stringify({
				target: {
					type: 'lambda',
					lambdaArn: 'asda'
				},
				widget: {
					name: 'asda',
					type: 'button'
				}
			}),
			apiKey: 'some_api_key_here'
		})
	})

	it('should not include API key', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		new ButtonizeCustomResource(testStack, 'customresource', {
			target: {
				type: 'lambda',
				lambdaArn: 'asda'
			},
			widget: {
				name: 'asda',
				type: 'button'
			}
		})

		const template = Template.fromStack(testStack)

		template.resourceCountIs('Custom::Buttonize', 1)

		template.resourceCountIs('AWS::Lambda::Function', 1)

		template.hasResourceProperties('Custom::Buttonize', {
			props: JSON.stringify({
				target: {
					type: 'lambda',
					lambdaArn: 'asda'
				},
				widget: {
					name: 'asda',
					type: 'button'
				}
			})
		})
	})
})
