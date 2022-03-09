const caesarCipher = require('./caesarCipher');

test('testing should be uftujoh', () => {
  expect(caesarCipher('testing', 1)).toBe('uftujoh');
})

test('z should be a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
})

test('"Hold the Line." should be "Ipme uif Mjof."', () => {
  expect(caesarCipher('Hold the Line.', 1)).toBe('Ipme uif Mjof.');
})