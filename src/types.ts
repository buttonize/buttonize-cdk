export interface LambdaTarget {
	readonly type: 'lambda'
	readonly lambdaArn: string
}

export interface CustomTarget {
	readonly type: 'custom'
	readonly inputVtlTemplate: string
	readonly outputVtlTemplate: string
}

export interface Widget {
	readonly name: string
	readonly type: 'button' | 'table'
}
