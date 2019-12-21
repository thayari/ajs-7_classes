import Swordsman from '../src/swordsman';

test('create swordsman', () => {
  const char = new Swordsman('John');
  const expected = {
    attack: 40,
    defence: 10,
    name: 'John',
    type: 'Swordsman',
  };
  expect(char).toEqual(expected);
});
