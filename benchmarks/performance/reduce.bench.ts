import { describe, bench } from 'vitest';
import { reduce as reduceGuardia } from 'guardia';
import { reduce as reduceLodash } from 'lodash';
import { reduce as reduceUnderscore } from 'underscore';
import { largeArray, smallArray } from './_internal';

describe('reduce, small array', () => {
  bench('guardia/reduce', () => {
    reduceGuardia(smallArray, (acc, cur) => acc + cur, 0);
  });

  bench('lodash/reduce', () => {
    reduceLodash(smallArray, (acc, cur) => acc + cur, 0);
  });

  bench('underscore/reduce', () => {
    reduceUnderscore(smallArray, (acc, cur) => acc + cur, 0);
  });
});

describe('reduce, large array', () => {
  bench('guardia/reduce', () => {
    reduceGuardia(largeArray, (acc, cur) => acc + cur, 0);
  });

  bench('lodash/reduce', () => {
    reduceLodash(largeArray, (acc, cur) => acc + cur, 0);
  });

  bench('underscore/reduce', () => {
    reduceUnderscore(largeArray, (acc, cur) => acc + cur, 0);
  });
});
