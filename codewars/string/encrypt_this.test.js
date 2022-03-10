const encryptThis = require('./encrypt_this!');

test('Should encrypt given words properly', () => {
  expect(encryptThis('A wise old owl lived in an oak')).toBe(
    '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
  );
});
