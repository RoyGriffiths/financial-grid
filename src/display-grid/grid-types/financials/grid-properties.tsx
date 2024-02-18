import { ColDef } from 'ag-grid-community'

export interface GridFinancialData {
  assetClass: string
  price: number
  ticker: string
}

export const validAssetClasses: string[] = ['Commodities', 'Credit', 'Equities']

const assetClassOrder: Record<string, number> = {
  Commodities: 0,
  Equities: 1,
  Credit: 2,
}

// Defines the order of the assets when sorted given assetClassOrder above.
// Here, Commodities would be displayed first if we sorted in descending order
export const compareAssetClassOrder = (fst: string, snd: string) => {
  if (assetClassOrder[fst] === assetClassOrder[snd]) return 0
  if (assetClassOrder[fst] < assetClassOrder[snd]) return 1
  else return -1
}

export interface RowAssetClassData {
  data: {
    assetClass: string
  }
}

// Gives a row the appropriate CSS class depending on the asset class cell value:
export const rowClassRulesAsset = {
  'asset-class-commodities': (params: RowAssetClassData) =>
    params.data.assetClass === 'Commodities',
  'asset-class-credit': (params: RowAssetClassData) =>
    params.data.assetClass === 'Credit',
  'asset-class-equities': (params: RowAssetClassData) =>
    params.data.assetClass === 'Equities',
}

export interface CellPriceData {
  value: number
}

// Gives a cell the appropriate CSS class depending on the price cell value:
export const cellClassRules = {
  'price-positive': (params: CellPriceData) => params.value > 0,
  'price-negative': (params: CellPriceData) => params.value < 0,
  'price-zero': (params: CellPriceData) => params.value === 0,
}

// Column definitions for our financial grid table:
export const financialGridColDefs: ColDef[] = [
  {
    headerName: 'Ticker',
    field: 'ticker',
    filter: true,
    width: 200,
    suppressSizeToFit: true
  },
  {
    headerName: 'Price',
    field: 'price',
    filter: true,
    cellClassRules: cellClassRules,
    type: 'rightAligned',
    headerClass: "ag-left-aligned-header",
    width: 150,
    suppressSizeToFit: true
  },
  {
    headerName: 'Asset Class',
    field: 'assetClass',
    filter: true,
    comparator: compareAssetClassOrder,
    width: 150,
  },
]
