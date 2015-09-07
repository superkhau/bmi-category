var test = require('tape');
var index = require('..');

test('index.category should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.get;

  t.equal(expected, actual);
});
