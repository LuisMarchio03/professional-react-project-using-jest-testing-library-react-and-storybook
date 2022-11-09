import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hero } from '../components/Hero'

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
  image: 'https://source.unsplash.com/random/1600x900',
  title: 'Hello World',
  children: (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  ),
}
