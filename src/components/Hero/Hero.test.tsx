import React from 'react'
import { render } from '@testing-library/react'

import { Hero } from '.'

test('renders Hero with children', () => {
  const { getByText } = render(
    <Hero image="">
      <p>Hero</p>
    </Hero>,
  )

  expect(getByText('Hero')).toBeInTheDocument()
})

test('renders Hero with image', () => {
  const image =
    'url(https://viagemeturismo.abril.com.br/wp-content/uploads/2021/04/road-3114475__340.jpg), rgba(0, 0, 0, 0.5)'

  const { getByTestId } = render(
    <Hero image={image}>
      <p>Hero</p>
    </Hero>,
  )

  expect(getByTestId('hero')).toHaveStyle(`background: ${image}`)
})
