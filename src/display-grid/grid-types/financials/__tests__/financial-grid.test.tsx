import '@testing-library/jest-dom'
import '@testing-library/jest-dom/jest-globals'
import { render, waitFor } from '@testing-library/react'
import * as StubAxios from '../../../../stubs/stub-axios-get'
import { FinancialGrid } from '../financial-grid'

jest.mock('../../../grid', () => ({
  Grid: jest.fn(({ data }) => <div>{JSON.stringify(data)}</div>),
}))

const mockFinancialData = [
  { ticker: 'TESTDATA', price: 100, assetClass: 'Credit' },
  { ticker: 'INDIA', price: 200, assetClass: 'Equities' },
  { ticker: 'FOXTROT', price: 300, assetClass: 'TestAsset' },
  { ticker: 'HOTEL', price: '300', assetClass: 'TestAsset' },
]

const mockFilteredData = [
  { ticker: 'TESTDATA', price: 100, assetClass: 'Credit' },
  { ticker: 'INDIA', price: 200, assetClass: 'Equities' },
]

jest.mock('../../../../stubs/stub-axios-get', () => ({
  stubAxiosGet: jest.fn(() => Promise.resolve({ data: mockFinancialData })),
}))

describe('FinancialGrid component', () => {
  it('renders without crashing', async () => {
    const { findByTestId } = render(<FinancialGrid />)
    expect(await findByTestId('financial-grid')).toBeInTheDocument()
  })

  it('successfully calls the stub api, filters the data, then passes on to the Grid component', async () => {
    const { findByTestId } = render(<FinancialGrid />)
    const gridElement = await findByTestId('financial-grid')

    await waitFor(() => {
      expect(StubAxios.stubAxiosGet).toHaveBeenCalledWith(
        '/financialInformation'
      )
      mockFilteredData.forEach((data) => {
        expect(gridElement).toHaveTextContent(data.ticker)
        expect(gridElement).toHaveTextContent(data.price.toString())
        expect(gridElement).toHaveTextContent(data.assetClass)
      })
    })
  })
})
