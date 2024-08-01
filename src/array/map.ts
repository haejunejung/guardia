/**
 * Iterates over elements of `array` and invokes `callback` for each element.
 * The `callback` invoked with three arguments: (value, index, array).
 * Creates a new array of values by running each element in the array through the `callback`.
 *
 * @template T - The type of elements in the input array.
 * @template U - The type of elements in the output array.
 * @param {readonly T[]} array - The array to iterate over.
 * @param {(value: T, index: number, array: readonly T[]) => U} callback -The function invoked per iteration.
 * @returns {readonly U[]} - A new array created by running each element in the array throught the `callback`.
 * @example
 * const example = [1, 2, 3];
 * const result = map(example, (value) => value * value); // [1, 4, ];
 */
export const map = <T, U>(
  array: readonly T[],
  callback: (value: T, index: number, array: readonly T[]) => U
): readonly U[] => {
  const length = array.length;
  const newArray = new Array<U>(length);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i], i, array);
  }

  return newArray;
};
