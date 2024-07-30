import { describe, expect, it } from 'vitest';
import { filter } from './filter';

describe('filter', () => {
  it('should correctly filter each element using `predicate`', () => {
    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    const expected = ['exuberant', 'destruction', 'present'];
    const result = filter(words, word => word.length > 6);
    expect(result).toStrictEqual(expected);
  });

  it('should correctly use the index parameter in the `predicate`', () => {
    const expected = [4, 5, 6];
    const result = filter([0, 1, 2, 3, 4, 5, 6], (_, index) => index > 3);
    expect(result).toStrictEqual(expected);
  });

  it('should pass the entire array as the third argument to the `predicate`', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4];
    const result = filter(array, (value, _, arr) => {
      const sumWithoutCurrent = arr.reduce((acc, curr) => acc + curr, 0) - value;
      return sumWithoutCurrent > 10;
    });
    expect(result).toStrictEqual(expected);
  });

  it('should return an empty array when input array is empty', () => {
    const array: number[] = [];
    const expected: number[] = [];
    const result = filter(array, value => value > 3);
    expect(result).toStrictEqual(expected);
  });

  it('should handle arrays with different data types', () => {
    const array = [1, '2', true, {}, undefined];
    expect(filter(array, value => typeof value === 'number')).toStrictEqual([1]);
    expect(filter(array, value => typeof value === 'string')).toStrictEqual(['2']);
    expect(filter(array, value => typeof value !== 'number')).toStrictEqual(['2', true, {}, undefined]);
  });

  it('should not modify the original array', () => {
    const array = [1, '2', true];
    const result = filter(array, value => typeof value !== 'number');
    expect(result).toStrictEqual(['2', true]);
    expect(array).toStrictEqual([1, '2', true]);
  });
});
