import { describe, bench } from 'vitest';
import { isArray as isArrayGuardia } from 'guardia';
import { isArray as isArrayLodash } from 'lodash';
import { isArray as isArrayUnderscore } from 'underscore';
import { largeArray, smallArray } from './_internal';

describe('isArray, small array', () => {
  bench('guardia/isArray', () => {
    isArrayGuardia(smallArray);
  });

  bench('lodash/isArray', () => {
    isArrayLodash(smallArray);
  });

  bench('underscore/isArray', () => {
    isArrayUnderscore(smallArray);
  });
});

describe('isArray, large array', () => {
  bench('guardia/isArray', () => {
    isArrayGuardia(largeArray);
  });

  bench('lodash/isArray', () => {
    isArrayLodash(largeArray);
  });

  bench('underscore/isArray', () => {
    isArrayUnderscore(largeArray);
  });
});
