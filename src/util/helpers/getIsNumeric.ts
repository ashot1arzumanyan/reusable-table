const getIsNumeric = (str: string) => !isNaN(+str) && !!parseFloat(str);

export default getIsNumeric;
