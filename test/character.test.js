import Character from '../src/character';

test('create random character', () => {
  const char = new Character('John');
  const expected = {
    attack: 0,
    defence: 0,
    name: 'John',
    type: '',
  };
  expect(char).toEqual(expected);
});
