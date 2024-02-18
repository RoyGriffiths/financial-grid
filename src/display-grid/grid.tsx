import { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, RowClassRules } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

interface GridProps {
  data: any
  columnDefs: ColDef[]
  rowClassRules: RowClassRules
}

export const Grid = ({ data, columnDefs, rowClassRules }: GridProps) => {
  const containerStyle = useMemo(
    () => ({ width: '700px', height: '700px' }),
    []
  )

  return (
    <div
      className={'ag-theme-quartz-dark'}
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
