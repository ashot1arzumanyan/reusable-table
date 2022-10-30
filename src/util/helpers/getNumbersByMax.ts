const getNumbersByMax = (max: number) => {
  if (max <= 1) return [1];

  const array = [];
  let i = 1;

  while(i <= max) {
    array.push(i);
    i += 1;
  }
  return array;
};

export default getNumbersByMax;
