import { globalStyles } from '../../styles/global'
import { theme } from '../../styles'

describe('Global Styles', () => {
  test('should render global styles', () => {
    expect(globalStyles).toMatchSnapshot()
  })

  test('should the to match snapshot', () => {
    expect(theme).toMatchSnapshot()
  })
})
