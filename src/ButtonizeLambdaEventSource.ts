import { IEventSource, IFunction } from 'aws-cdk-lib/aws-lambda'

import { ButtonizeCustomResource } from './ButtonizeCustomResource'
import { Widget } from './types'

export interface ButtonizeLambdaEventSourceOptions {
	apiKey?: string
}

export class ButtonizeLambdaEventSource implements IEventSource {
	readonly widgetProps: Widget
	readonly options?: ButtonizeLambdaEventSourceOptions

	constructor(
		widgetProps: Widget,
		options?: ButtonizeLambdaEventSourceOptions
	) {
		this.widgetProps = widgetProps
		this.options = options
	}

	public bind(target: IFunction): void {
		new ButtonizeCustomResource(target, {
			resource: {
				type: 'lambda',
				lambdaArn: target.functionArn
			},
			widget: this.widgetProps,
			apiKey: this.options?.apiKey
		})
	}
}
