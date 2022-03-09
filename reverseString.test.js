const reverseString = require('./reverseString')

test('Revers of dog should be god', () => {
  expect(reverseString('dog')).toBe('god');
});

test('Revers of "boogie woogie" should be "eigoow eigoob"', () => {
  expect(reverseString('boogie woogie')).toBe('eigoow eigoob');
});