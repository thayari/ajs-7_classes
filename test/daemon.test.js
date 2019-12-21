import Daemon from '../src/daemon';

test('create daemon', () => {
  const char = new Daemon('John');
  const expected = {
    attack: 10,
    defence: 40,
    name: 'John',
    type: 'Daemon',
  };
  expect(char).toEqual(expected);
});
