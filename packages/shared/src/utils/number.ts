/** Takes in a number and a precision then returns the rounded number with chosen decimal places. E.g. (1.59348, 1) returns 1.6 */
export const roundNumber = (value: number, precision: number) => {
  if (Number.isNaN(value)) value = 0;
  value = Number(value);

  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};
