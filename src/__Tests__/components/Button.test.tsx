import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Button } from '../../components/atoms/Button'

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

test('should not be able to trigger event on click with button disabled', () => {
  const handleClick = jest.fn()
  const { getByRole } = render(<Button disabled onClick={handleClick} />)

  fireEvent.click(getByRole('button'))

  expect(handleClick).not.toBeCalled()
})

test('[Primary] variants button', () => {
  const { asFragment } = render(<Button variant="primary" />)
  expect(asFragment()).toMatchSnapshot()
})

test('[Secondary] variants button', () => {
  const { asFragment } = render(<Button variant="secondary" />)
  expect(asFragment()).toMatchSnapshot()
})

test('[Danger] variants button', () => {
  const { asFragment } = render(<Button variant="danger" />)
  expect(asFragment()).toMatchSnapshot()
})
