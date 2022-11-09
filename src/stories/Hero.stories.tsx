import React from 'react'
import { Hero, HeroProps } from '../components/Hero'

export default {
  title: 'Hero',
  component: Hero,
}

const Template = (args: HeroProps) => <Hero {...args} />

export const Usage = Template.bind({})
Usage.args = {
  title: 'Hello World',
  children: <p>Teste</p>,
}

export const UsageWithList = Template.bind({})
UsageWithList.args = {
  title: 'Hero Title',
  children: (
    <ul>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </ul>
  ),
}

export const UsageWithImage = Template.bind({})
UsageWithImage.args = {
  image: './assets/hero.jpg',
  title: 'Hero Title',
  children: (
    <ul>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
      <li>Lorem Ipsum</li>
    </ul>
  ),
}
