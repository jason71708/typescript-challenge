/**
 * https://aka.ms/typescript/5
 */

const compose = (...args: any) => {
  return (value: any) => args.reduceRight((acc: any, fn: any) => fn(acc), value)
}

const numToString = (a: number) => {
  return a.toString();
};

const addOne = (a: number) => {
  return a + 1;
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

export const addOneToString = compose(
  numToString,
  addOne,
  stringToNum
);
