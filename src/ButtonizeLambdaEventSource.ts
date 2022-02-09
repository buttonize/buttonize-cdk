import { IEventSource, IFunction } from 'aws-cdk-lib/aws-lambda'

import { ButtonizeCustomResource } from './ButtonizeCustomResource'

export class ButtonizeLambdaEventSource implements IEventSource {
	constructor() {}

	public bind(target: IFunction): void {
		new ButtonizeCustomResource(target, {
			lambda: target.functionArn
		})
	}
}
