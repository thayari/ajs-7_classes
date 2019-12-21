import Magician from '../src/magician';

test('create swordsman', () => {
  const char = new Magician('John');
  const expected = {
    attack: 10,
    defence: 40,
    name: 'John',
    type: 'Magician',
  };
  expect(char).toEqual(expected);
});
