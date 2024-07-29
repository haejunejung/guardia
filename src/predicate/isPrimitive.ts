/**
 * `isPrimitve` checks whether the provided value is a primitive type.
 *
 * TypeScript supports primitives, which are the basic types in JavaScript that make up data other than
 * functions and objects. TypeScript recognizes the following seven primitive types in JavaScript:
 * - bigint
 * - boolean
 * - null
 * - number
 * - string
 * - symbol
 * - undefined
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} - Returns `true` if the provided value is a primitive type, otherwise returns `false`.
 * @example
 * isPrimitive(0) // true
 * isPrimitive({ key: 'value' }) // false
 * isPrimitive(() => {}) // false
 */

export const isPrimitive = (
  value: unknown
): value is bigint | boolean | null | number | string | symbol | undefined => {
  return value == null || (typeof value !== 'object' && typeof value !== 'function');
};
