import React from 'react'
import { render } from '@testing-library/react'

import { Title } from '../../components/atoms/Title'

test('match snapshot', () => {
  const { asFragment } = render(<Title>Title</Title>)
  expect(asFragment()).toMatchSnapshot()
})
