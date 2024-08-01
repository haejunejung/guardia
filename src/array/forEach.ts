/**
 * Iterates over elements of `array` and invokes `callback` for each element.
 * The `callback` is invokes with three arguments: (value, index, array).
 *
 * @template T - The type of elements in the array.
 * @param {readonly T[]} array - The array to iterate over.
 * @param {(value: T, index: number, array: readonly T[])} callback - The function invoked per iteration.
 * @returns {void}
 * @example
 * const exampleArray = [1, 2, 3];
 * const values:  number[]    = [];
 * const indices: number[]    = [];
 * const arrays:  number[][]  = [];
 *
 * forEach(exampleArray, (value, index, array) => {
 *    values.push(value);
 *    indices.push(index);
 *    arrays.push(array);
 * })
 *
 * console.log(values)  // [1, 2, 3]
 * console.log(indices) // [0, 1, 2]
 * console.log(arrays)  // [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
 */

export const forEach = <T>(
  array: readonly T[],
  callback: (value: T, index: number, array: readonly T[]) => void
): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
