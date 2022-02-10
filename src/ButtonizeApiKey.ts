import { Construct } from 'constructs'
import { ButtonizeCustomResourceProvider } from './ButtonizeCustomResourceProvider'

export class ButtonizeApiKey {
	public static setDefaultApiKey(scope: Construct, apiKey: string): void {
		const provider = ButtonizeCustomResourceProvider.getOrCreateProvider(scope)

		provider.setDefaultApiKey(apiKey)
	}
}
