export const getDeepValue = <T, TFirstKey extends keyof T, TSecondKey extends keyof T[ TFirstKey ]>(
  obj: T,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => {
  return obj[ firstKey ][ secondKey ];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "12",
    d: 18,
  },
};

const value = getDeepValue(obj, "foo", "a");
