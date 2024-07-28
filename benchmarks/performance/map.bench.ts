import { describe, bench } from 'vitest';
import { map as mapGuardia } from 'guardia';
import { map as mapLodash } from 'lodash';
import { map as mapUnderscore } from 'underscore';
import { largeArray, noop, smallArray } from './_internal';

describe('map, small array', () => {
  bench('guardia/map', () => {
    mapGuardia(smallArray, noop);
  });

  bench('lodash/map', () => {
    mapLodash(smallArray, noop);
  });

  bench('underscore/map', () => {
    mapUnderscore(smallArray, noop);
  });
});

describe('map, large array', () => {
  bench('guardia/map', () => {
    mapGuardia(largeArray, noop);
  });

  bench('lodash/map', () => {
    mapLodash(largeArray, noop);
  });

  bench('underscore/map', () => {
    mapUnderscore(largeArray, noop);
  });
});
