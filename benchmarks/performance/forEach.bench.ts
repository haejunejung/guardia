import { describe, bench } from 'vitest';
import { forEach as forEachGuaria } from 'guardia';
import { forEach as forEachLodash } from 'lodash';
import { forEach as forEachUnderscore } from 'underscore';
import { largeArray, noop, smallArray } from './_internal';

describe('forEach, small array', () => {
  bench('guardia/forEach, small array', () => {
    forEachGuaria(smallArray, noop);
  });

  bench('lodash/forEach, small array', () => {
    forEachLodash(smallArray, noop);
  });

  bench('underscore/forEach, small array', () => {
    forEachUnderscore(smallArray, noop);
  });
});

describe('forEach, large array', () => {
  bench('guardia/forEach, large array', () => {
    forEachGuaria(largeArray, noop);
  });

  bench('lodash/guardia, large array', () => {
    forEachLodash(largeArray, noop);
  });

  bench('underscore/guardia, large array', () => {
    forEachUnderscore(largeArray, noop);
  });
});
