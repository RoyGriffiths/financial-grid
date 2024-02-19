import { validAssetClasses, GridFinancialData } from './grid-properties'

/**
 * Returns true or false depending on whether it satisfies the conditions of being a valid data row:
 * That is: assetClass, price, and ticker exist with the correct types and assetclass is one of the accepted values.
 *
 * @param item - data to be checked.
 * @returns boolean.
 */
export const assetClassFilter = (item: GridFinancialData) => {
  if (validAssetClasses.includes(item['assetClass'] as string)) {
    return true
  }
  return false
}
