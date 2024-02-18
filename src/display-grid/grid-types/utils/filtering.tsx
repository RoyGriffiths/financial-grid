type GenericItem = Record<string, any>

/**
 * Filters an array of items into two arrays based on a filter function.
 *
 * @param data - The array of items to filter.
 * @param filter - A function that determines whether an item meets the criteria, returns bool.
 * @returns An object containing two arrays: `filtered` for items that meet the criteria and `removed` for those that do not.
 */
export const filterData = <T extends GenericItem>(
  data: T[],
  filter: (item: T) => boolean
): { filtered: T[]; removed: T[] } => {
  const output = data.reduce<{ filtered: T[]; removed: T[] }>(
    (acc, item) => {
      const key = filter(item) ? 'filtered' : 'removed'
      acc[key].push(item)
      return acc
    },
    { filtered: [], removed: [] }
  )

  return output
}
