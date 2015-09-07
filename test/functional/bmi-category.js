var test = require('tape');
var bmiCategory = require('../..');

test('FT returns the correct category for the given bmi', function(t) {
  t.plan(4);

  t.equal('underweight', bmiCategory.get(18.4));
  t.equal('normal', bmiCategory.get(24.9));
  t.equal('overweight', bmiCategory.get(29.9));
  t.equal('obese', bmiCategory.get(30));
});
