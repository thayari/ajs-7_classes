import Zombie from '../src/zombie';

test('create zombie', () => {
  const char = new Zombie('John');
  const expected = {
    attack: 40,
    defence: 10,
    name: 'John',
    type: 'Zombie',
  };
  expect(char).toEqual(expected);
});
