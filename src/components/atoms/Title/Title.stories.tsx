import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title } from '.'

import { globalStyles } from '../../../styles/global'
globalStyles()

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const TitleH1 = Template.bind({})

TitleH1.args = {
  children: (
    <>
      Title <strong>h1</strong>
    </>
  ),
}

export const TitleH2 = Template.bind({})
TitleH2.args = {
  children: (
    <>
      Title <strong>h2</strong>
    </>
  ),
}

export const TitleH3 = Template.bind({})
TitleH3.args = {
  children: (
    <>
      Title <strong>h3</strong>
    </>
  ),
}

export const TitleH4 = Template.bind({})
TitleH4.args = {
  children: (
    <>
      Title <strong>h4</strong>
    </>
  ),
}

export const TitleH5 = Template.bind({})
TitleH5.args = {
  children: (
    <>
      Title <strong>h5</strong>
    </>
  ),
}

export const TitleH6 = Template.bind({})
TitleH6.args = {
  children: (
    <>
      Title <strong>h6</strong>
    </>
  ),
}
