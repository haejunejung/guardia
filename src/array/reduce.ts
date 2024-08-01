/**
 * Executes a user-supplied `reducer` function on each element of the array, in order,
 * passing in teh return value from the calculation on the preceeding element.
 * The final result of running the reducer across all elements of the array is a single value.
 *
 * The first time that the `reducer` is run there is no "return value of the previous calculation".
 * The initial value may be used in its place.
 *
 * @template T - The type of elements in the input array.
 * @template U - The type of elements in the output array.
 * @param {readonly T[]} array - The array to iterate over.
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: readonly T[])} reducer
 * The function to execute on each element, taking the accumulator and the current element as arguments.
 * @param {U} initialValue - The initial value to use as the first argument to the first call of the reducer.
 * @returns {U} - The final result after all elements have been processed by the reducer.
 * @example
 * const array = [1,2,3,4,5];
 *
 * // result will be 15.
 * const result = reduce(array, (acc, cur) => {
 *    return acc + cur;
 * }, 0)
 */

export function reduce<T, U>(
  array: readonly T[],
  reducer: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U,
  initialValue: U
): U {
  let previousValue = initialValue;
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    previousValue = reducer(previousValue, currentValue, index, array);
  }

  return previousValue;
}
