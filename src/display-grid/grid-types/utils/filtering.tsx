/**
 * Filters an array of items into two arrays based on a filter function.
 *
 * @param data - The array of items to filter.
 * @param predicate - A function that determines whether an item meets the criteria, returns bool.
 * @returns An object containing two arrays: `filtered` for items that meet the criteria and `removed` for those that do not.
 */
export function filterDataWithPredicate<T>(
  data: T[],
  predicate: (item: T) => boolean
): { filtered: T[]; removed: T[] } {
  return data.reduce<{ filtered: T[]; removed: T[] }>(
    (acc, item) => {
      if (predicate(item)) {
        acc.filtered.push(item)
      } else {
        acc.removed.push(item)
      }
      return acc
    },
    { filtered: [], removed: [] }
  )
}
