import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hero } from '../components/Hero'

import { globalStyles } from '../styles/global'
globalStyles()

export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Usage = Template.bind({})
Usage.args = {
  title: 'Hello World',
  children: (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  ),
}

export const UsageWithImage = Template.bind({})
UsageWithImage.args = {
  image:
    'url(https://viagemeturismo.abril.com.br/wp-content/uploads/2021/04/road-3114475__340.jpg), rgba(0, 0, 0, 0.5)',
  title: 'Hello World',
  children: (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  ),
}
