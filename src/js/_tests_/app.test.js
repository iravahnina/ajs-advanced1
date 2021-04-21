import orderByProps from '../app';

test('for ... in', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['name', 'level'];

  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];
    expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});