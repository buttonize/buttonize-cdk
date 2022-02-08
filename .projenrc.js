const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  name: '@buttonize/cdk',
  license: 'MIT',
  minNodeVersion: '14.17.0',

  author: 'Buttonzie',
  authorOrganization: 'Buttonize',
  authorUrl: 'https://buttonize.io',

  defaultReleaseBranch: 'master',
  repositoryUrl: 'git@github.com:buttonize/buttonize-cdk.git',

  devDeps: ['@commitlint/cli@^16.0.0', '@commitlint/config-conventional@^16.0.0', 'husky@^7.0.4', 'lint-staged@^11.2.6'],

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

  jestOptions: {
    jestConfig: {
      collectCoverage: true,
      collectCoverageFrom: ['src/**/*.ts'],
      coverageProvider: 'v8',
      coverageThreshold: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },

  // Maybe nice features, but keeping it simple for now
  githubOptions: {
    mergify: false,
    clobber: false,
    pullRequestLint: false,
  },
});

project.addFields({
  'lint-staged': {
    '*.{ts,js,json}': 'eslint --fix',
  },
});

project.setScript('prepare', 'husky install');

project.synth();
