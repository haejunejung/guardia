import { describe, bench } from 'vitest';
import { filter as filterGuaria } from 'guardia';
import { filter as filterLodash } from 'lodash';
import { filter as filterUnderscore } from 'underscore';
import { largeArray, smallArray } from './_internal';

describe('filter, small array', () => {
  bench('guardia/filter', () => {
    filterGuaria(smallArray, () => true);
  });

  bench('lodash/filter', () => {
    filterLodash(smallArray, () => true);
  });

  bench('underscore/filter', () => {
    filterUnderscore(smallArray, () => true);
  });
});

describe('filter, large array', () => {
  bench('guardia/filter', () => {
    filterGuaria(largeArray, () => true);
  });

  bench('lodash/filter', () => {
    filterLodash(largeArray, () => true);
  });

  bench('underscore/filter', () => {
    filterUnderscore(largeArray, () => true);
  });
});
