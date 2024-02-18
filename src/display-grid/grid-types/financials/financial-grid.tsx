import { useEffect, useState } from 'react'
import { stubAxiosGet } from '../../../stubs/stub-axios-get'
import { Grid } from '../../grid'
import { filterData } from '../utils/filtering'
import { assetPriceTickerFilter } from './data-filter'
import {
  GridFinancialData,
  financialGridColDefs,
  rowClassRulesAsset,
} from './grid-properties'
import './styles/styles.css'

interface FilteredData {
  filtered: GridFinancialData[]
  removed: GridFinancialData[]
}

export const FinancialGrid = () => {
  const [financialData, setFinancialData] = useState<GridFinancialData[]>([])
  const [outputData, setOutputData] = useState<FilteredData>({
    filtered: [],
    removed: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await stubAxiosGet('/financialInformation')
      setFinancialData(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setOutputData(filterData(financialData, assetPriceTickerFilter))
  }, [financialData])

  return (
    <>
      <div data-testid={'financial-grid'}>
        <Grid
          data={outputData.filtered}
          columnDefs={financialGridColDefs}
          rowClassRules={rowClassRulesAsset}
        />
      </div>
    </>
  )
}
