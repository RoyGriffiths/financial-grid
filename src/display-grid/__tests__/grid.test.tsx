import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Grid } from '../grid'

interface TestData {
  data: {
    value: number
  }
}

describe('Grid component', () => {
  const columnDefsMock = [
    { headerName: 'Value', field: 'value' },
    { headerName: 'Good Score', field: 'goodScore' },
  ]

  const rowDataMock = [
    { value: 50, goodScore: 'Not great score' },
    { value: 100, goodScore: 'Maximum score' },
  ]

  const rowClassRulesMock = {
    'test-row-class': (params: TestData) => params.data.value >= 60,
  }

  it('renders correctly with provided props', () => {
    render(
      <Grid
        data={rowDataMock}
        columnDefs={columnDefsMock}
        rowClassRules={rowClassRulesMock}
      />
    )

    expect(screen.getByText('Value')).toBeInTheDocument()
    expect(screen.getByText('Good Score')).toBeInTheDocument()

    rowDataMock.forEach((data) => {
      expect(screen.getByText(data.value)).toBeInTheDocument()
      expect(screen.getByText(data.goodScore.toString())).toBeInTheDocument()
    })
  })
})
