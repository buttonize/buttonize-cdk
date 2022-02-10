import { CfnResource } from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { ButtonizeCustomResourceProvider } from './ButtonizeCustomResourceProvider'
import { LambdaTarget, CustomTarget, Widget } from './types'

export interface ButtonizeCustomResourceProps {
	readonly target: LambdaTarget | CustomTarget
	readonly widget: Widget
	readonly apiKey?: string
}

export class ButtonizeCustomResource extends CfnResource {
	constructor(
		scope: Construct,
		id: string,
		{ target, widget, apiKey }: ButtonizeCustomResourceProps
	) {
		super(scope, id, {
			type: 'Custom::Buttonize',
			properties: {
				ServiceToken:
					ButtonizeCustomResourceProvider.getOrCreateProvider(scope)
						.serviceToken,
				props: JSON.stringify({
					target,
					widget
				}),
				...(typeof apiKey === 'undefined' ? {} : { apiKey })
			}
		})
	}
}
