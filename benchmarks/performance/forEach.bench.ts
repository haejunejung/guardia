import { describe, bench } from 'vitest';
import { forEach as forEachGuaria } from 'guardia';
import { forEach as forEachLodash } from 'lodash';
import { forEach as forEachUnderscore } from 'underscore';
import { largeArray, noop, smallArray } from './_internal';

describe('forEach, small array', () => {
  bench('guardia/forEach', () => {
    forEachGuaria(smallArray, noop);
  });

  bench('lodash/forEach', () => {
    forEachLodash(smallArray, noop);
  });

  bench('underscore/forEach', () => {
    forEachUnderscore(smallArray, noop);
  });
});

describe('forEach, large array', () => {
  bench('guardia/forEach', () => {
    forEachGuaria(largeArray, noop);
  });

  bench('lodash/guardia', () => {
    forEachLodash(largeArray, noop);
  });

  bench('underscore/guardia', () => {
    forEachUnderscore(largeArray, noop);
  });
});
