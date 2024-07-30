import { describe, expect, expectTypeOf, it } from 'vitest';
import { noop } from './noop';

describe('noop', () => {
  it('should be a function', () => {
    expectTypeOf(noop).toBeFunction();
  });

  it('should always return `undefined`', () => {
    expect(noop()).toBeUndefined();
  });
});
