import { IterableContainer } from '../_internal/types';

/**
 * `isArray` determines whether the passed value is an array.
 *
 * @param value - The passed value
 * @returns
 * - `true`: if the passed value is array.
 * - `false`: if the passed values is non-array.
 *
 * @example
 * isArray([1, 2, 3]) // true
 * isArray([1, '2', true]) // true
 *
 * isArray({ '0': 0, '1': 1 }) // false
 * isArray('1') // false
 * isArray(1) // false
 */
export const isArray = <T>(value: T): value is Extract<T, IterableContainer> => {
  return Array.isArray(value);
};
