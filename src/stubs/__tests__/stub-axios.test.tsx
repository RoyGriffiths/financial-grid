import { stubAxiosGet } from '../stub-axios-get'
import stubData from '../test-data.json'

describe('mockAxiosGet function', () => {
  const url = '/financialInformation'

  it('returns data successfully if correct url', async () => {
    const response = await stubAxiosGet(url)

    expect(response.data).toBeDefined()
    expect(response.data).toEqual(stubData)
    expect(Array.isArray(response.data)).toBeTruthy()
    expect(response.data).toHaveLength(stubData.length)
  })

  it('returns data of the correct type with correct url', async () => {
    const response = await stubAxiosGet(url)

    if (response.data.length > 0) {
      const item = response.data[0]
      expect(item).toHaveProperty('assetClass')
      expect(item).toHaveProperty('price')
      expect(item).toHaveProperty('ticker')
      expect(typeof item.assetClass).toBe('string')
      expect(typeof item.price).toBe('number')
      expect(typeof item.ticker).toBe('string')
    }
  })

  it('resolves data in an asynchronous manner', async () => {
    const start = Date.now()
    await stubAxiosGet(url)
    const end = Date.now()

    expect(end - start).toBeLessThan(100)
  })

  it('returns empty array if not correct url', async () => {
    const response = await stubAxiosGet('/some/url')

    expect(response.data).toBeDefined()
    expect(Array.isArray(response.data)).toBeTruthy()
    expect(response.data).toEqual([])
  })
})
