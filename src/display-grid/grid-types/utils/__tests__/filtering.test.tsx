import { filterData } from '../filtering'

describe('filterData function', () => {
  const testData = [
    { id: 1, name: 'Alex', age: 15 },
    { id: 2, name: 'John', age: 25 },
    { id: 3, name: 'Todd', age: 32 },
  ]

  const ageFilter = (item: (typeof testData)[number]) => item.age > 30

  it('correctly filters items based on age', () => {
    const result = filterData(testData, ageFilter)

    expect(result.filtered.length).toBe(1)
    expect(result.removed.length).toBe(2)
    expect(result.filtered[0].id).toBe(3)
  })

  it('handles empty arrays properly', () => {
    const result = filterData([], ageFilter)
    expect(result.filtered).toEqual([])
    expect(result.removed).toEqual([])
  })
})
