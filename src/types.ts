export interface LambdaResource {
	readonly type: 'lambda'
	readonly lambdaArn: string
}

export interface Widget {
	readonly name: string
	readonly type: 'button' | 'table'
}
