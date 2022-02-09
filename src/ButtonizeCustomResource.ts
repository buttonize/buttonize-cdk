import { CfnResource } from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { ButtonizeCustomResourceProvider } from './ButtonizeCustomResourceProvider'

export interface ButtonizeCustomResourceProps {
	lambda: string
}

export class ButtonizeCustomResource extends CfnResource {
	constructor(scope: Construct, props: ButtonizeCustomResourceProps) {
		super(scope, 'ButtonizeCustomResource', {
			type: 'Custom::Buttonize',
			properties: {
				ServiceToken:
					ButtonizeCustomResourceProvider.getOrCreateProvider(scope)
						.serviceToken,
				lambda: props.lambda
			}
		})
	}
}
