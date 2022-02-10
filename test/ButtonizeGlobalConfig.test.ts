import { App, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { ButtonizeCustomResourceProvider } from '../src/ButtonizeCustomResourceProvider'
import { ButtonizeGlobalConfig } from '../src/ButtonizeGlobalConfig'

describe('ButtonizeCustomResourceProvider', () => {
	it('should have logs enabled', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		ButtonizeGlobalConfig.enableLogs(testStack)

		const template = Template.fromStack(testStack)

		template.resourceCountIs('AWS::Lambda::Function', 2)
		template.resourceCountIs('AWS::IAM::Role', 2)
		template.resourceCountIs('Custom::LogRetention', 1)
	})

	it('should have default API key set', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		ButtonizeGlobalConfig.setDefaultApiKey(testStack, 'karel123')

		const template = Template.fromStack(testStack)

		template.resourceCountIs('AWS::Lambda::Function', 1)
		template.resourceCountIs('AWS::IAM::Role', 1)
		template.resourceCountIs('Custom::LogRetention', 0)

		template.hasResourceProperties('AWS::Lambda::Function', {
			Environment: {
				Variables: {
					DEFAULT_API_KEY: 'karel123'
				}
			}
		})
	})
})
