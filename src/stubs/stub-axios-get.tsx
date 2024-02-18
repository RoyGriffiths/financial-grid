import stubData from './test-data.json'
import emptyData from './test-data-empty.json'
import { GridFinancialData } from '../display-grid/grid-types/financials/grid-properties'

interface AxiosResponse<T> {
  data: T
}

/**
 * Stubs grabbing data from a URL.
 *
 * @param url - A string URL, if is the correct URL, returns data, else returns empty json.
 * @returns Array of data grabbed from the test-data.json file.
 */
export const stubAxiosGet = async (
  url: string
): Promise<AxiosResponse<GridFinancialData[]>> => {
  if (url === '/financialInformation') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: stubData as GridFinancialData[] })
      }, 0)
    })
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: emptyData as GridFinancialData[] })
    }, 0)
  })
}
