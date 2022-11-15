import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '..'

import { globalStyles } from '../../../styles/global'
globalStyles()

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const UsagePrimary = Template.bind({})
UsagePrimary.args = {
  type: 'button',
  children: <>Click me</>,
  variant: 'primary',
}

export const UsageSecondary = Template.bind({})
UsageSecondary.args = {
  type: 'button',
  children: <>Click me</>,
  variant: 'secondary',
}
