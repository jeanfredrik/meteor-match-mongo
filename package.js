Package.describe({
  name: 'jeanfredrik:match-mongo',
  version: '0.0.1',
  summary: 'Match an object against a mongo selector using check() and Meteor.match()',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('match-mongo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jeanfredrik:match-mongo');
  api.addFiles('match-mongo-tests.js');
});
