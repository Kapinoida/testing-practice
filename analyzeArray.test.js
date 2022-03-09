const analyzeArray = require('./analyzeArray');

test('[1,2,3] should be {length:3, min:1, max:3, average:2}', () => {
  expect(analyzeArray([1,2,3])).toStrictEqual({length:3, min:1, max:3, average:2});
})