/**
 * ['a', 'a', 'a', 'a'] // true
 * ['a', 'a', 'b', 'a'] // false
 */
export function isAllEqual(arr: any[]): boolean {
  return arr.every((v) => v === arr[0]);
}
