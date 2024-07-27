import { describe, bench } from 'vitest';
import { isArray as isArrayGuardia } from 'guardia';
import { isArray as isArrayLodash } from 'lodash';

describe('isArray', () => {
  bench('guardia/isArray', () => {
    isArrayGuardia([1, 2, 3]);
  });

  bench('lodash/isArray', () => {
    isArrayLodash([1, 2, 3]);
  });
});
