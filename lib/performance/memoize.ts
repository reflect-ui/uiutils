//
// from https://github.com/noya-app/noya/blob/main/packages/noya-state/src/utils/memoize.ts (MIT)
//

/**
 * https://en.wikipedia.org/wiki/Memoization
 * https://betterprogramming.pub/understanding-javascript-typescript-memoization-6e0333b62406
 * @param f
 * @returns
 */
export function memoize<I extends unknown[], O>(
  f: (...values: I) => O
): (...values: I) => O {
  const intermediateCache = new Map<I[number], string>();
  const cache: Map<string, O> = new Map();
  let intermediateCacheIndex = 0;

  return (...values: I): O => {
    let key = "";

    for (let value of values) {
      if (!intermediateCache.has(value)) {
        intermediateCache.set(value, `${intermediateCacheIndex++}`);
      }
      key += intermediateCache.get(value)! + ":";
    }

    if (!cache.has(key)) {
      cache.set(key, f(...values));
    }
    return cache.get(key)!;
  };
}
