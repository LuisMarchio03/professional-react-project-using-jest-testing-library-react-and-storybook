import { globalStyles } from '../../styles/global'

describe('Global Styles', () => {
  it('should render global styles', () => {
    expect(globalStyles).toMatchSnapshot()
  })
})
