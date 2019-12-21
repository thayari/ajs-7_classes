import Bowman from '../src/bowman';

test('create bowman', () => {
  const char = new Bowman('John');
  const expected = {
    attack: 25,
    defence: 25,
    name: 'John',
    type: 'Bowman',
  };
  expect(char).toEqual(expected);
});
