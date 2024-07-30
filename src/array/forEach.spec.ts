import { describe, expect, expectTypeOf, it, vi } from 'vitest';
import { forEach } from './forEach';

describe('forEach', () => {
  it('should handle empty array', () => {
    const array: unknown[] = [];
    const fn = vi.fn();
    forEach(array, fn);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should iterates left to right', () => {
    const array = [1, 2, 3];
    const elements: number[] = [];
    const indices: number[] = [];
    const arrays: Array<readonly number[]> = [];

    forEach(array, (element, i, arr) => {
      elements.push(element);
      indices.push(i);
      arrays.push(arr);
    });

    expect(elements).toStrictEqual([1, 2, 3]);
    expect(indices).toStrictEqual([0, 1, 2]);
    expect(arrays).toStrictEqual([array, array, array]);
  });

  it('should be applied type guard', () => {
    const array1 = [1, 2, 3];
    forEach(array1, (element, index, array) => {
      expectTypeOf(element).toBeNumber();
      expectTypeOf(index).toBeNumber();
      expectTypeOf(array).toEqualTypeOf<ReadonlyArray<number>>();
    });

    const array2 = [1, 2, 3] as const;
    forEach(array2, (element, index, arr) => {
      expectTypeOf(element).toEqualTypeOf<1 | 2 | 3>();
      expectTypeOf(index).toBeNumber();
      expectTypeOf(arr).toEqualTypeOf<readonly (1 | 2 | 3)[]>();
    });
  });
});
