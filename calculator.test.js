const calculator = require('./calculator');

test('Should add', () => {
  expect(calculator(1,"+",2)).toBe(3);
})

test('Should subtract', () => {
  expect(calculator(1,"-",2)).toBe(-1);
})

test('Should multiply', () => {
  expect(calculator(1,"*",2)).toBe(2);
})

test('Should divide', () => {
  expect(calculator(1,"/",2)).toBe(.5);
})