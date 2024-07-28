export const filter = <T, S extends T>(
  array: ReadonlyArray<T>,
  predicate: (value: T, index: number, array: ReadonlyArray<T>) => boolean
): ReadonlyArray<S> => {
  const length = array.length;
  let resultLength = 0;
  const result: Array<S> = new Array<S>();

  for (let i = 0; i < length; i++) {
    const value = array[i];
    if (predicate(value, i, array)) {
      result[resultLength++] = value as S;
    }
  }

  result.length = resultLength;
  return result;
};
