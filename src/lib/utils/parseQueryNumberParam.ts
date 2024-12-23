export const parseQueryNumberParam = (param: string | undefined): number | undefined => {
  const num = Number(param);
  return isNaN(num) ? undefined : num;
};