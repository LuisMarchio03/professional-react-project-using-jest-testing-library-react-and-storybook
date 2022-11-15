import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Hero } from '..'
import { Title } from '../../Title'
import { Button } from '../../Button'
import { Container } from '../../../App'

import { globalStyles } from '../../../styles/global'
globalStyles()

export default {
  title: 'Components/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

// export const Usage = Template.bind({})
// Usage.args = {
//   children: (
//     <>
//       <Title>
//         Ganhe sua <strong>liberdade</strong> <br /> para ir e vir
//       </Title>
//       <ul>
//         <li>One</li>
//         <li>Two</li>
//         <li>Three</li>
//       </ul>
//     </>
//   ),
// }

export const UsageWithImage = Template.bind({})
UsageWithImage.args = {
  image:
    'url(https://viagemeturismo.abril.com.br/wp-content/uploads/2021/04/road-3114475__340.jpg), rgba(0, 0, 0, 0.5)',
  children: (
    <Container>
      <Title>
        Ganhe sua <strong>liberdade</strong> <br /> para ir e vir
      </Title>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button variant="secondary">Matricule-se agora</Button>
    </Container>
  ),
}
