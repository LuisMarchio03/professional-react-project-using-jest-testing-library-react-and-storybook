import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

import { Button } from '..'

import { globalStyles } from '../../../styles/global'
import { styled } from '../../../styles'
globalStyles()

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const events = actions({ onClick: 'clicked' })

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const UsagePrimary: ComponentStory<typeof Button> = (args) => (
  <Container>
    <Button {...events} type="button" children="Primary" variant="primary" />
    <Button
      type="button"
      children="Primary - Disabled"
      disabled
      variant="primary"
    />
  </Container>
)

export const UsageSecondary: ComponentStory<typeof Button> = () => (
  <Container>
    <Button
      {...events}
      type="button"
      children="Secondary"
      variant="secondary"
    />
    <Button
      type="button"
      children="Secondary - Disabled"
      disabled
      variant="secondary"
    />
  </Container>
)

export const UsageDanger: ComponentStory<typeof Button> = () => (
  <Container>
    <Button {...events} type="button" children="Danger" variant="danger" />
    <Button
      type="button"
      children="Danger - Disabled"
      disabled
      variant="danger"
    />
  </Container>
)
