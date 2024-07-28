/**
 * `isArray` checks whether the provided value is an array.
 *
 * @param value - The value to check.
 * @returns - Returns `true` if the provided value is an array, otherwise returns `false`.
 * @example
 * const array = [1, 2, 3];
 * isArray(array) // true
 *
 * const nonArray = {'0': 0, '1': 1};
 * isArray(nonArray) // false
 */
export const isArray = <T>(value: T): value is Extract<T, ReadonlyArray<unknown>> => {
  return Array.isArray(value);
};
