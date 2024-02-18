import { assetPriceTickerFilter } from '../data-filter'

describe('assetPriceTickerFilter function', () => {
  it('returns true if object is valid for assetClass, price, and ticker', () => {
    const testData = { assetClass: 'Credit', price: 5, ticker: 'TEST' }
    const result = assetPriceTickerFilter(testData)
    expect(result).toBe(true)
  })

  it('returns false if object does not have valid assetClass', () => {
    const testData = { assetClass: 'Test Asset', price: 5, ticker: 'TEST' }
    const result = assetPriceTickerFilter(testData)
    expect(result).toBe(false)
  })

  it('returns false if object price is not a number', () => {
    const testData = { assetClass: 'Commodities', price: '5', ticker: 'TEST' }
    const result = assetPriceTickerFilter(testData)
    expect(result).toBe(false)
  })

  it('returns false if object ticker is not a string', () => {
    const testData = { assetClass: 'Commodities', price: 5, ticker: 50 }
    const result = assetPriceTickerFilter(testData)
    expect(result).toBe(false)
  })

  it('returns false if object does not contain assetClass or price or ticker', () => {
    const noPriceRes = assetPriceTickerFilter({
      assetClass: 'Credit',
      ticker: 'TEST',
    })
    const noTickerRes = assetPriceTickerFilter({
      assetClass: 'Credit',
      price: 5,
    })
    const noAssetRes = assetPriceTickerFilter({ price: 5, ticker: 'TEST' })
    expect([noPriceRes, noTickerRes, noAssetRes]).toEqual([false, false, false])
  })
})
