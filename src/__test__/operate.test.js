import operate from '../logic/operate';

describe('operate', () => {
  test('return 15 after adding 10 + 5', () => {
    expect(operate('10', '5', '+')).toEqual('15');
  });
  test('return 10 after adding 15 - 5', () => {
    expect(operate('15', '5', '-')).toEqual('10');
  });
  test('return 40 after adding 8 x 5', () => {
    expect(operate('8', '5', 'x')).toEqual('40');
  });
  test('return 5 after adding 15 ÷ 3', () => {
    expect(operate('15', '3', '÷')).toEqual('5');
  });
  test('return 2 after obtaining modulus 12 % 5', () => {
    expect(operate('12', '5', '%')).toEqual('2');
  });
  test('return a message if try to divide by zero', () => {
    expect(operate('12', '0', '÷')).toEqual('Can\'t divide by 0.');
  });
});
