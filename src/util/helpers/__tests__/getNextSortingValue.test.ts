import getNextSortingValue from '../getNextSortingValue';

describe('getNextSortingValue', () => {
  it('should return 0', () => {
    const result = getNextSortingValue(1);
    expect(result).toBe(-1);
  });

  it('should return 1', () => {
    const result = getNextSortingValue(0);
    expect(result).toBe(1);
  });

  it('should return -1', () => {
    const result = getNextSortingValue(-1);
    expect(result).toBe(0);
  });
});
