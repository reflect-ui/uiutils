/**
 * retrieves the nearest value of givven @param goal in @param array
 * e.g. goal 12, input:[1, 3, 7, 11, 342] -> 11
 * @param goal
 * @param array
 */
export function nearestValue(goal: number, array: Array<number>): number {
  return array.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
}
