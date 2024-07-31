import { describe, expect, it } from 'vitest';
import { isPrimitive } from './isPrimitive';

describe('isPrimitive', () => {
  it('should return `true` if the provided value is a primitive type', () => {
    expect(isPrimitive(9007199254740991n)).toBeTruthy();
    expect(isPrimitive(true)).toBeTruthy();
    expect(isPrimitive(null)).toBeTruthy();
    expect(isPrimitive(0)).toBeTruthy();
    expect(isPrimitive('0')).toBeTruthy();
    expect(isPrimitive(Symbol('0'))).toBeTruthy();
    expect(isPrimitive(undefined)).toBeTruthy();
  });

  it('should return `false` if the provided value is a non-primitive type', () => {
    expect(isPrimitive(() => {})).toBeFalsy();
    expect(isPrimitive(new Date())).toBeFalsy();
    expect(isPrimitive(new Error())).toBeFalsy();
    expect(isPrimitive(new Object())).toBeFalsy();
    expect(isPrimitive([])).toBeFalsy();
    expect(isPrimitive({})).toBeFalsy();
    expect(isPrimitive([])).toBeFalsy();
    expect(isPrimitive(new Set())).toBeFalsy();
  });
});
