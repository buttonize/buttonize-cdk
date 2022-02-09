import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'

import { Buttonize } from '../src/test'

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
