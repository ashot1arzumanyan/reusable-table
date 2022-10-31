import { sortNumbers, sortStrings } from '../sortingHelpers'

describe('sortingHelpers', () => {
  const users = [
    'bc',
    'ca',
    'ad',
    'sa'
  ];

  const ages = [
    27,
    20,
    36,
    21
  ];

  test('ascending order of strings', () => {
    const result = [...users].sort(sortStrings(1));
    expect(result).toEqual(['ad', 'bc', 'ca', 'sa']);
  });

  test('descending order of strings', () => {
    const result = [...users].sort(sortStrings(-1));
    expect(result).toEqual(['sa', 'ca', 'bc', 'ad']);
  });

  test('ascending order of numbers', () => {
    const result = [...ages].sort(sortNumbers(-1));
    expect(result).toEqual([20, 21, 27, 36]);
  });

  test('descending order of numbers', () => {
    const result = [...ages].sort(sortNumbers(11));
    expect(result).toEqual([36, 27, 21, 20]);
  });
});
