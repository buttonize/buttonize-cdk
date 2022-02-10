import { App, Stack } from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { ButtonizeCustomResourceProvider } from '../src/ButtonizeCustomResourceProvider'

describe('ButtonizeCustomResourceProvider', () => {
	it('should create provider', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)

		const template = Template.fromStack(testStack)

		template.resourceCountIs('AWS::Lambda::Function', 1)
		template.resourceCountIs('AWS::IAM::Role', 1)
		template.resourceCountIs('Custom::LogRetention', 0)
	})

	it('should create single provider even for multiple calls', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)

		const template = Template.fromStack(testStack)

		template.resourceCountIs('AWS::Lambda::Function', 1)
		template.resourceCountIs('AWS::IAM::Role', 1)
		template.resourceCountIs('Custom::LogRetention', 0)
	})

	it('should have logs enabled', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		const provider =
			ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		provider.enableLogs()

		const template = Template.fromStack(testStack)

		template.resourceCountIs('AWS::Lambda::Function', 2)
		template.resourceCountIs('AWS::IAM::Role', 2)
		template.resourceCountIs('Custom::LogRetention', 1)
	})

	it('should have default API key set', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		const provider =
			ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)
		provider.setDefaultApiKey('karel123')

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

	it('should allow API key to be set only once', () => {
		const app = new App()
		const testStack = new Stack(app, 'TestStack')

		const provider =
			ButtonizeCustomResourceProvider.getOrCreateProvider(testStack)

		expect(() => {
			provider.setDefaultApiKey('karel123')
			provider.setDefaultApiKey('petr321')
		}).toThrowError(
			'Default Buttonize API key has been already set. (value="karel123")'
		)

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
