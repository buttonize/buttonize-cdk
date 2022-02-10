import { Construct } from 'constructs'
import { ButtonizeCustomResource } from './ButtonizeCustomResource'
import { Widget } from './types'

export interface ButtonizeCustomTargetProps {
	readonly inputVtlTemplate: string
	readonly outputVtlTemplate: string
	readonly widget: Widget
	readonly apiKey?: string
}

export class ButtonizeCustomTarget extends Construct {
	protected constructor(
		scope: Construct,
		id: string,
		{
			widget,
			apiKey,
			inputVtlTemplate,
			outputVtlTemplate
		}: ButtonizeCustomTargetProps
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
