const capitalize = require('./capitalize');

test('Capitalize add to Add', () => {
  expect(capitalize('add')).toBe('Add');
});

test('Capitalize "green sleeves" to "Green sleeves"', () => {
  expect(capitalize('green sleeves')).toBe('Green sleeves');
});