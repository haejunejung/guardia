/**
 * `noop` is a function that performs no operations.
 * It can be used as a placeholder or default function where no action is needed.
 *
 * This function is useful in the follwing scenarios:
 * - Default Callbacks: Providing a default callback to avoid null checks or undefined errors.
 * - Testing: Serving as a mock function in tests where the actual implementation is not required.
 * - Event handlers: Using as a default event handler where no action is needed.
 * - Optional Functionality: Diabling certain functionality by assigning a no-op function.
 *
 * @returns {void} - This function does not return any value.
 * @example
 * noop() // Does nothing
 */
export const noop = (): void => {};
