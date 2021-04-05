// The built-in Number.EPSILON is too small for some of our calculations.
export function isNumberEqual(a: number, b: number): boolean {
  return Math.abs(a - b) < 1e-6;
}
