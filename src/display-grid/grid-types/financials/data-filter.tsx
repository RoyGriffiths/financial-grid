import { validAssetClasses } from './grid-properties'

/**
 * Returns true or false depending on whether it satisfies the conditions of being a valid data row:
 * That is: assetClass, price, and ticker exist with the correct types and assetclass is one of the accepted values.
 *
 * @param item - object to be checked.
 * @returns boolean.
 */
export const assetPriceTickerFilter = (item: object) => {
  if ('assetClass' in item && 'price' in item && 'ticker' in item) {
    if (
      typeof item['assetClass'] == 'string' &&
      typeof item['price'] === 'number' &&
      typeof item['ticker'] === 'string'
    ) {
      if (validAssetClasses.includes(item['assetClass'] as string)) {
        return true
      }
    }
  }
  return false
}
