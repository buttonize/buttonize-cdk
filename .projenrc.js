const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Filip Pýrek',
  authorAddress: 'PyrekFilip@gmail.com',
  cdk8sVersion: '1.4.10',
  defaultReleaseBranch: 'main',
  name: 'buttonize-cdk',
  repositoryUrl: 'git@github.com:buttonize/buttonize-cdk.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();