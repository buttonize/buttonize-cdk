import { createHash } from 'crypto'
import { IEventSource, IFunction } from 'aws-cdk-lib/aws-lambda'

import { ButtonizeCustomResource } from './ButtonizeCustomResource'
import { Widget } from './types'

export interface ButtonizeLambdaEventSourceOptions {
	readonly apiKey?: string
}

export class ButtonizeLambdaEventSource implements IEventSource {
	private readonly widgetProps: Widget
	private readonly options?: ButtonizeLambdaEventSourceOptions
	private readonly id: string

	constructor(
		widgetProps: Widget,
		options?: ButtonizeLambdaEventSourceOptions
	) {
		this.widgetProps = widgetProps
		this.options = options

		this.id = createHash('md5')
			.update(JSON.stringify({ widgetProps, options }))
			.digest('hex')
	}

	public bind(target: IFunction): void {
		new ButtonizeCustomResource(target, `ButtonizeCustomResource${this.id}`, {
			target: {
				type: 'lambda',
				lambdaArn: target.functionArn
			},
			widget: this.widgetProps,
			apiKey: this.options?.apiKey
		})
	}
}
