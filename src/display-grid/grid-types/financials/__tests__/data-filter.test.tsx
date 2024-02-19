import { assetClassFilter } from '../data-filter'
import { GridFinancialData } from '../grid-properties'

describe('assetPriceTickerFilter function', () => {
  it('returns true if object is valid for assetClass, price, and ticker', () => {
    const testData: GridFinancialData = {
      assetClass: 'Credit',
      price: 5,
      ticker: 'TEST',
    }
    const result = assetClassFilter(testData)
    expect(result).toBe(true)
  })

  it('returns false if object does not have valid assetClass', () => {
    const testData: GridFinancialData = {
      assetClass: 'Test Asset',
      price: 5,
      ticker: 'TEST',
    }
    const result = assetClassFilter(testData)
    expect(result).toBe(false)
  })
})
