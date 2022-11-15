import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Button } from '../../components/Button'

test('renders a text', () => {
  const { getByText } = render(<Button>Click here</Button>)
  expect(getByText('Click here')).toBeInTheDocument()
})

test('trigger event on click', () => {
  const handleClick = jest.fn()
  const { getByRole } = render(<Button onClick={handleClick} />)

  fireEvent.click(getByRole('button'))

  expect(handleClick).toBeCalled()
})
