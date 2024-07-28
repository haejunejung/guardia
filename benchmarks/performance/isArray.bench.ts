import { describe, bench } from 'vitest';
import { isArray as isArrayGuardia } from 'guardia';
import { isArray as isArrayLodash } from 'lodash';
import { isArray as isArrayUnderscore } from 'underscore';
import { largeArray, smallArray } from './_internal';

describe('isArray, small array', () => {
  bench('guardia/isArray, small array', () => {
    isArrayGuardia(smallArray);
  });

  bench('lodash/isArray, small array', () => {
    isArrayLodash(smallArray);
  });

  bench('underscore/isArray, small array', () => {
    isArrayUnderscore(smallArray);
  });
});

describe('isArray, large array', () => {
  bench('guardia/isArray, large array', () => {
    isArrayGuardia(largeArray);
  });

  bench('lodash/isArray, large array', () => {
    isArrayLodash(largeArray);
  });

  bench('underscore/isArray, large array', () => {
    isArrayUnderscore(largeArray);
  });
});
