import {
  compareAssetClassOrder,
  cellClassRules,
  rowClassRulesAsset,
  RowAssetClassData,
  CellPriceData,
} from '../grid-properties'

describe('compareAssetClassOrder function', () => {
  it('returns 1 when lower order asset class is first', () => {
    const actual = compareAssetClassOrder('Credit', 'Equities')
    expect(actual).toEqual(1)
  })

  it('returns -1 when higher order asset classes is first', () => {
    const actual = compareAssetClassOrder('Commodities', 'Equities')
    expect(actual).toEqual(-1)
  })

  it('returns 0 when both asset classes are the same', () => {
    const actual = compareAssetClassOrder('Equities', 'Equities')
    expect(actual).toEqual(0)
  })
})

describe('cellClassRules', () => {
  const testDataPos: CellPriceData = { value: 50 }
  const testDataNeg: CellPriceData = { value: -50 }
  const testDataZer: CellPriceData = { value: 0 }

  it('for price-positive, only returns true for when value > 0', () => {
    const posValRes = cellClassRules['price-positive'](testDataPos)
    const negValRes = cellClassRules['price-positive'](testDataNeg)
    const zeroValRes = cellClassRules['price-positive'](testDataZer)
    expect([posValRes, negValRes, zeroValRes]).toEqual([true, false, false])
  })

  it('for price-negative, only returns true for when value < 0', () => {
    const posValRes = cellClassRules['price-negative'](testDataPos)
    const negValRes = cellClassRules['price-negative'](testDataNeg)
    const zeroValRes = cellClassRules['price-negative'](testDataZer)
    expect([posValRes, negValRes, zeroValRes]).toEqual([false, true, false])
  })

  it('for price-zero, only returns true for when value === 0', () => {
    const posValRes = cellClassRules['price-zero'](testDataPos)
    const negValRes = cellClassRules['price-zero'](testDataNeg)
    const zeroValRes = cellClassRules['price-zero'](testDataZer)
    expect([posValRes, negValRes, zeroValRes]).toEqual([false, false, true])
  })
})

describe('rowClassRules', () => {
  const testDataCommodities: RowAssetClassData = {
    data: { assetClass: 'Commodities' },
  }
  const testDataCredit: RowAssetClassData = { data: { assetClass: 'Credit' } }
  const testDataEquities: RowAssetClassData = {
    data: { assetClass: 'Equities' },
  }

  it('for asset-class-commodities, only returns true when asset class is Commodities', () => {
    const commoditiesRes =
      rowClassRulesAsset['asset-class-commodities'](testDataCommodities)
    const creditRes =
      rowClassRulesAsset['asset-class-commodities'](testDataCredit)
    const equitiesRes =
      rowClassRulesAsset['asset-class-commodities'](testDataEquities)
    expect([commoditiesRes, creditRes, equitiesRes]).toEqual([
      true,
      false,
      false,
    ])
  })

  it('for asset-class-credit, only returns true when asset class is Credit', () => {
    const commoditiesRes =
      rowClassRulesAsset['asset-class-credit'](testDataCommodities)
    const creditRes = rowClassRulesAsset['asset-class-credit'](testDataCredit)
    const equitiesRes =
      rowClassRulesAsset['asset-class-credit'](testDataEquities)
    expect([commoditiesRes, creditRes, equitiesRes]).toEqual([
      false,
      true,
      false,
    ])
  })

  it('for asset-class-equities, only returns true when asset class is Equities', () => {
    const commoditiesRes =
      rowClassRulesAsset['asset-class-equities'](testDataCommodities)
    const creditRes = rowClassRulesAsset['asset-class-equities'](testDataCredit)
    const equitiesRes =
      rowClassRulesAsset['asset-class-equities'](testDataEquities)
    expect([commoditiesRes, creditRes, equitiesRes]).toEqual([
      false,
      false,
      true,
    ])
  })
})
