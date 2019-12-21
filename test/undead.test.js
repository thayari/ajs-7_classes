import Undead from '../src/undead';

test('create undead', () => {
  const char = new Undead('John');
  const expected = {
    attack: 25,
    defence: 25,
    name: 'John',
    type: 'Undead',
  };
  expect(char).toEqual(expected);
});
