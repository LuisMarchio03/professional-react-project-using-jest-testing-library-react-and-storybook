import { globalStyles } from '../../styles/global'
import { styled } from '../../styles'

describe('Global Styles', () => {
  test('should render global styles', () => {
    expect(globalStyles).toMatchSnapshot()
  })
})
