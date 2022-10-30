export const sortStrings = (ascendingOrDescending: number) => (a: string, b: string) => {
  if (a.localeCompare(b) > 0) {
    return 1 * ascendingOrDescending;
  }
  if (a.localeCompare(b) < 0) {
    return -1 * ascendingOrDescending;
  }
  return 0;
};

export const sortNumbers = (ascendingOrDescending: number) => (a: number, b: number) => (
  (b - a) * ascendingOrDescending
);
