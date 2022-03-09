function calculator(a, operator, b){
  if(operator === '+') {
    return a + b;
  }
  if(operator === '-') {
    return a - b;
  }
  if(operator === '*') {
    return a * b;
  }
  if(operator === '/') {
    return a / b;
  }
}

module.exports = calculator