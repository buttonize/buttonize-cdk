const { awscdk } = require('projen')

const project = new awscdk.AwsCdkConstructLibrary({
	name: '@buttonize/cdk',
	license: 'MIT',
	minNodeVersion: '14.17.0',
	keywords: ['aws-cdk', 'cdk', 'serverless', 'aws'],

	cdkVersion: '2.11.0',

	author: 'Buttonzie',
	authorOrganization: 'Buttonize',
	authorUrl: 'https://buttonize.io',

	defaultReleaseBranch: 'master',
	repositoryUrl: 'git@github.com:buttonize/buttonize-cdk.git',

	devDeps: [
		'@commitlint/cli@^16.0.0',
		'@commitlint/config-conventional@^16.0.0',
		'husky@^7.0.4',
		'lint-staged@^11.2.6'
	],

	// catalog: {
	// 	announce: true,
	// 	twitter: '@buttonize'
	// },

	// Will be enabled when Buttonize is released
	publishToMaven: false,
	publishToGo: false,
	publishToPypi: false,
	publishToNuget: false,

	// Maybe nice features, but keeping it simple for now
	depsUpgrade: false,
	stale: false,
	mutableBuild: false,

	eslintOptions: {
		prettier: true
	},

	jestOptions: {
		jestConfig: {
			collectCoverage: true,
			collectCoverageFrom: ['src/**/*.ts'],
			coverageProvider: 'v8'
			// coverageThreshold: {
			// 	branches: 100,
			// 	functions: 100,
			// 	lines: 100,
			// 	statements: 100
			// }
		}
	},

	packageManager: 'npm',
	npmAccess: 'public',

	// Maybe nice features, but keeping it simple for now
	githubOptions: {
		mergify: false,
		clobber: false,
		pullRequestLint: false
	}
})

project.addFields({
	'lint-staged': {
		'*.{ts,js}': 'eslint --fix'
	}
})

project.eslint.addRules({
	'@typescript-eslint/ban-ts-comment': [
		'error',
		{
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': true,
			'ts-check': false
		}
	],
	'@typescript-eslint/ban-types': ['off'],
	'@typescript-eslint/explicit-function-return-type': 'warn',
	'@typescript-eslint/no-explicit-any': ['warn'],
	'@typescript-eslint/no-unused-vars': 'error',
	'@typescript-eslint/no-use-before-define': ['warn'],
	'@typescript-eslint/prefer-optional-chain': 'error'
})

project.setScript('prepare', 'husky install')

// .npmignore
;[
	'.husky',
	'.editorconfig',
	'.gitattributes',
	'.nvmrc',
	'commitlint.config.js',
	'renovate.json'
].forEach((pattern) => project.addPackageIgnore(pattern))

project.synth()
