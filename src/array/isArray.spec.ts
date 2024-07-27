import { describe, expect, expectTypeOf, it } from 'vitest';
import { isArray } from './isArray';

describe('isArray', () => {
  it('should return `true` if the passed value is array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray([1, '2', true])).toBeTruthy();
    expect(isArray([])).toBeTruthy();
    expect(isArray(new Array())).toBeTruthy();
    expect(isArray(Array.prototype)).toBeTruthy();
  });

  it('should return `false` if the passed value is non-array', () => {
    expect(isArray(1)).toBeFalsy();
    expect(isArray('1')).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(new Set())).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray(new Error())).toBeFalsy();
    expect(isArray(Array.prototype.slice)).toBeFalsy();
    expect(isArray(new Object())).toBeFalsy();
    expect(isArray(/0-9/)).toBeFalsy();
    expect(isArray(Symbol('a'))).toBeFalsy();
  });

  it('should be applied type guard', () => {
    expectTypeOf(isArray([1, 2, 3])).toBeBoolean();
  });
});
