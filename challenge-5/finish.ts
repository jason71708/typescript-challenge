type StringLiterals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
type NumberLiterals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type String2Number<T extends StringLiterals[any]> = NumberLiterals[T];
type Number2String<T extends number> = StringLiterals[T];

type PrependInTuple<P, T extends any[]> = T extends [...rest: infer R]
  ? [P, ...R]
  : [];

type PreviousNumber<T extends number> = PrependInTuple<
  never,
  NumberLiterals
>[T];

type DropFirstInTuple<T extends any[]> = T extends [
  arg1: any,
  ...rest: infer U
]
  ? U
  : never;

type NextNumber<T extends number> = DropFirstInTuple<NumberLiterals>[T];

type UnaryFn = (arg: any) => any;
type ArityFn = (...arg: any) => any;

type ValidChain<T extends [...UnaryFn[], ArityFn]> = {
  [K in keyof T]: K extends StringLiterals[any]
    ? K extends Number2String<PreviousNumber<T["length"]>>
      ? T[K]
      : NextNumber<String2Number<K>> extends keyof T
      ? (
          i: ReturnType<T[NextNumber<String2Number<K>>]>
        ) => ReturnType<T[String2Number<K>]>
      : T[K]
    : T[K];
};

type FirstFnParametersType<T extends any[]> = Parameters<
  T[PreviousNumber<T["length"]>]
>;
type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;

type Compose = <T extends [...UnaryFn[], ArityFn]>(
  ...fns: ValidChain<T>
) => (...p: FirstFnParametersType<T>) => LastFnReturnType<T>;

export const compose: Compose =
  (...fns: any[]) =>
  (...x: any[]) =>
    fns.reduceRight((acc: any, cur: any, index: number) =>
      index === 1 ? cur(acc(...x)) : cur(acc)
    );

const numToString = (a: number) => {
  return a.toString();
};

const addOne = (a: number) => {
  return a + 1;
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

const addOneToString = compose(
  stringToNum,
  addOne,
  numToString,
  stringToNum,
  numToString,
  stringToNum,
  numToString,
  stringToNum,
  numToString,
  stringToNum,
  numToString,
  stringToNum,
  numToString,
  stringToNum,
  numToString,
);