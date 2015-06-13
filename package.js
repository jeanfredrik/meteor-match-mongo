Package.describe({
  name: 'jeanfredrik:match-mongo',
  version: '0.0.1',
  summary: 'Match an object against a mongo selector using check() and Match.test()',
  git: 'https://github.com/jeanfredrik/meteor-match-mongo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('minimongo');
  api.use('check');
  api.use('mongo', {weak: true});
  api.addFiles('match-mongo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jeanfredrik:match-mongo');
  api.addFiles('match-mongo-tests.js');
});
