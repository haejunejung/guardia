/**
 * Returns the elements of an array that meet the condition specified in a predicate function.
 *
 * @template T - The type of elements in the input array.
 * @template S - The type of elements in the output array.
 * @param {ReadonlyArray<T>} array - The array to iterate over.
 * @param {(value: T, index: number, array: ReadonlyArray<T>) => boolean} predicate
 * A function that takes an element from the array; its index, and the array itself as arugments,
 * and returns a boolean indicating whether the element should be included in the output array.
 * @returns {ReadonlyArray<S>} - A new array that meet the condition specified in a `predicate` function.
 * @example
 * const words = ["a", "ab", "abc", "abcd", "abcde", "abcdef"];
 * const overFourLengthWords = filter(words, word => word.length > 4); // ["abcde", "abcdef"]
 */

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
