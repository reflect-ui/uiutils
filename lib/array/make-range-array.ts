/**
 * returns an array of numbers from start to end with steps
 *
 * ```ts
 * fillWithRange(0, 10, 2) // => [0, 2, 4, 6, 8]
 * fillWithRange(0, -10, 1) // => []
 * fillWithRange(0, -10, -1) // => [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]
 * ```
 * @param start
 * @param end
 * @param step defaults to 1 or -1
 * @returns
 */
export function makeRangeArray(
  start: number,
  end: number,
  step?: number
): number[] {
  step = step ?? (start < end ? 1 : -1);

  let _len = Math.max(Math.ceil((end - start) / step), 0);
  let result = Array<number>(_len);

  let i = -1;
  let val = start; // first value is start.
  // loops through until reaches 0.
  while (_len--) {
    result[++i] = val;
    val += step;
  }

  return result;
}
