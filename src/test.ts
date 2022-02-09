import * as path from 'path'
import { Duration } from 'aws-cdk-lib'
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs'

import { ButtonizeLambdaEventSource } from './ButtonizeLambdaEventSource'

export class Buttonize extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id)

		const handler = new Function(this, 'LambdaHandler', {
			functionName: 'karel',
			code: Code.fromAsset(path.join(__dirname, 'custom-resource')),
			runtime: Runtime.NODEJS_14_X,
			handler: 'handler.handler',
			timeout: Duration.minutes(2),
			logRetention: RetentionDays.THREE_MONTHS
		})

		handler.addEventSource(new ButtonizeLambdaEventSource())
	}
}
