import { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, RowClassRules } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

interface GridProps {
  data: object[]
  columnDefs: ColDef[]
  rowClassRules: RowClassRules
}

export const Grid = ({ data, columnDefs, rowClassRules }: GridProps) => {
  const containerStyle = useMemo(
    () => ({ width: '650px', height: '650px' }),
    []
  )

  return (
    <div
      className={'ag-theme-alpine-dark'}
      style={containerStyle}
      data-testid={'grid'}
    >
      <AgGridReact
        animateRows={false}
        multiSortKey="ctrl"
        rowData={data}
        columnDefs={columnDefs}
        rowClassRules={rowClassRules}
      />
    </div>
  )
}
