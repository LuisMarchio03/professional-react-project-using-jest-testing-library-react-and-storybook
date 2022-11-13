import React from 'react'
import { render } from '@testing-library/react'

import { Hero } from '.'

test('renders Hero with children', () => {
  const component = render(
    <Hero image="">
      <p>Hero</p>
    </Hero>,
  )

  expect(component.getByText('Hero')).toBeTruthy()
})
