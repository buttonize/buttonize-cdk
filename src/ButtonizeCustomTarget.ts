import { Construct } from 'constructs'
import { ButtonizeCustomResource } from './ButtonizeCustomResource'
import { Widget } from './types'

export interface ButtonizeCustomTargetProps {
	readonly inputVtlTemplate: string
	readonly outputVtlTemplate: string
	readonly widget: Widget
}

export interface ButtonizeCustomTargetOptions {
	readonly apiKey?: string
}

export class ButtonizeCustomTarget extends Construct {
	constructor(
		scope: Construct,
		id: string,
		{ widget, inputVtlTemplate, outputVtlTemplate }: ButtonizeCustomTargetProps,
		{ apiKey }: ButtonizeCustomTargetOptions = {}
	) {
		super(scope, id)
		new ButtonizeCustomResource(this, id, {
			target: {
				type: 'custom',
				inputVtlTemplate,
				outputVtlTemplate
			},
			widget,
			apiKey
		})
	}
}
