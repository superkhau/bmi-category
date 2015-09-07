var category = require('../lib/category');
var test = require('tape');

test('category.get should return "underweight" when BMI is less than 18.5',
    function(t) {
  t.plan(4);

  var expected = 'underweight';

  t.equal(expected, category.get(-1));
  t.equal(expected, category.get(0));
  t.equal(expected, category.get(1));
  t.equal(expected, category.get(18.4));
});

test('category.get should return "normal" when BMI ranges from 18.5 to 24.9',
    function(t) {
  t.plan(2);

  var expected = 'normal';

  t.equal(expected, category.get(18.5));
  t.equal(expected, category.get(24.9));
});

test('category.get should return "overweight" when BMI ranges from 25.5 to ' +
    '29.9', function(t) {
  t.plan(2);

  var expected = 'overweight';

  t.equal(expected, category.get(25.5));
  t.equal(expected, category.get(29.9));
});

test('category.get should return "obese" when BMI is 30 or greater',
    function(t) {
  t.plan(2);

  var expected = 'obese';

  t.equal(expected, category.get(30));
  t.equal(expected, category.get(31));
});
