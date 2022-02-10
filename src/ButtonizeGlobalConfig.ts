import { RetentionDays } from 'aws-cdk-lib/aws-logs'
import { Construct } from 'constructs'
import { ButtonizeCustomResourceProvider } from './ButtonizeCustomResourceProvider'

export class ButtonizeGlobalConfig {
	public static setDefaultApiKey(scope: Construct, apiKey: string): void {
		const provider = ButtonizeCustomResourceProvider.getOrCreateProvider(scope)

		provider.setDefaultApiKey(apiKey)
	}

	public static enableLogs(scope: Construct, retention?: RetentionDays): void {
		const provider = ButtonizeCustomResourceProvider.getOrCreateProvider(scope)

		provider.enableLogs(retention)
	}
}
