import getIsNumeric from "../getIsNumeric";

describe('getIsNumeric', () => {
  it('should return true', () => {
    expect(getIsNumeric('2')).toBe(true);
    expect(getIsNumeric(2)).toBe(true);
  });

  it('should return false', () => {
    expect(getIsNumeric('0')).toBe(false);
    expect(getIsNumeric('a2')).toBe(false);
    expect(getIsNumeric('')).toBe(false);
    expect(getIsNumeric()).toBe(false);
  });
});
