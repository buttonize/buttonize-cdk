import { CfnResource } from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { ButtonizeCustomResourceProvider } from './ButtonizeCustomResourceProvider'
import { LambdaResource, Widget } from './types'

export interface ButtonizeCustomResourceProps {
	readonly resource: LambdaResource
	readonly widget: Widget
	readonly apiKey?: string
}

export class ButtonizeCustomResource extends CfnResource {
	constructor(scope: Construct, props: ButtonizeCustomResourceProps) {
		super(scope, 'ButtonizeCustomResource', {
			type: 'Custom::Buttonize',
			properties: {
				ServiceToken:
					ButtonizeCustomResourceProvider.getOrCreateProvider(scope)
						.serviceToken,
				props: JSON.stringify(props),
				...(typeof props.apiKey === 'undefined' ? {} : { apiKey: props.apiKey })
			}
		})
	}
}
