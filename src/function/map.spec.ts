import { describe, expect, expectTypeOf, it } from 'vitest';
import { map } from './map';

describe('map', () => {
  it('should map each element to a new value', () => {
    const array = [1, 2, 3];
    const expected = [1, 4, 9];
    const result = map(array, value => value * value);
    expect(result).toStrictEqual(expected);
  });

  it('should return an empty array when input array is empty', () => {
    const array: number[] = [];
    const expected: number[] = [];
    const result = map(array, value => value * value);
    expect(result).toStrictEqual(expected);
  });

  it('should correctly use the index parameter in the `callback`', () => {
    const array = [1, 2, 3];
    const expected = [0, 1, 2];
    const result = map(array, (_, index) => index);
    expect(result).toStrictEqual(expected);
  });

  it('should pass the entire array as the third argument to the `callback`', () => {
    const array = [1, 2, 3];
    const expected = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    const result = map(array, (_1, _2, arr) => arr);
    expect(result).toStrictEqual(expected);
  });

  it('should handle arrays with different data types', () => {
    const array = [1, '2', true, {}, undefined];
    const expected = ['number', 'string', 'boolean', 'object', 'undefined'];
    const result = map(array, value => typeof value);
    expect(result).toStrictEqual(expected);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3];
    const result = map(array, value => value * value);
    expect(array).toStrictEqual([1, 2, 3]);
    expect(result).toStrictEqual([1, 4, 9]);
  });

  it('should be applied type guard', () => {
    const array = [1, '2', true, {}, undefined] as const;
    const expectedTypes = ['number', 'string', 'boolean', 'object', 'undefined'] as const;
    map(array, (value, index, arr) => {
      expect(typeof value).toBe(expectedTypes[index]);
      expectTypeOf(index).toBeNumber();
      expectTypeOf(arr).toEqualTypeOf<ReadonlyArray<(typeof array)[number]>>();
    });
  });
});
