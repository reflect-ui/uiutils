/**
 * usage: 
 * ```
 * const a = ['a', 1, 'a', 2, '1'];
const unique = a.filter(onlyUnique);
 * ```
 * @param value 
 * @param index 
 * @param self 
 * @returns 
 */
export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
