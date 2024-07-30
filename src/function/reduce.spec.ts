import { describe, expect, expectTypeOf, it } from 'vitest';
import { reduce } from './reduce';

describe('reduce', () => {
  it('should correctly accumulate values', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const expected = [0, 1, 3, 6, 10, 15];
    const result = reduce(
      array,
      (acc, cur, index) => {
        expect(acc).toStrictEqual(expected[index]);
        expectTypeOf(acc).toBeNumber();
        return acc + cur;
      },
      0
    );

    expect(result).toBe(15);
  });

  it('should correctly iterate each element in the input array', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const result = reduce(
      array,
      (acc, cur, index) => {
        expect(cur).toStrictEqual(array[index]);
        expectTypeOf(cur).toBeNumber();
        return acc + cur;
      },
      0
    );

    expect(result).toBe(15);
  });

  it('should handle an empty array', () => {
    const result = reduce(
      [],
      (acc, cur) => {
        expect(cur).toBeUndefined();
        return acc;
      },
      0
    );

    expect(result).toBe(0);
  });

  it('should handle an array with a custom initial value', () => {
    const result = reduce([], (acc, cur) => acc + cur, 10);

    expect(result).toBe(10);
  });

  it('should correctly use the index parameter in the `callback`', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const expected = [0, 1, 2, 3, 4];
    const result = reduce(
      array,
      (acc, cur, index) => {
        expect(index).toStrictEqual(expected[index]);
        expectTypeOf(index).toBeNumber();
        return acc + cur;
      },
      0
    );

    expect(result).toBe(15);
  });

  it('should correctly pass the entire array as the fourth argument to the `callback`', () => {
    const array: number[] = [1, 2, 3, 4, 5];
    const result = reduce(
      array,
      (acc, _1, _2, array) => {
        expect(array).toStrictEqual([1, 2, 3, 4, 5]);
        return [...acc, ...array];
      },
      [] as number[]
    );

    const expected = new Array(5).fill(array).flat();
    expect(result).toStrictEqual(expected);
  });

  it('should be applied type assertion', () => {
    const array = [1, 2, 3, 4, 5] as const;
    const result = reduce(
      array,
      (acc, cur, index) => {
        expect(cur).toStrictEqual(array[index]);
        return acc + cur;
      },
      0
    );

    expect(result).toBe(15);
  });
});
