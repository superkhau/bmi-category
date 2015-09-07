exports.get = get;

function get(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'normal';
  } else if (bmi >= 25 && bmi < 30) {
    return 'overweight';
  } else {
    return 'obese';
  }
}
