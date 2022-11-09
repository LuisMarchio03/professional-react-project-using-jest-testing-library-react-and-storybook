import React from 'react'
import { Container } from './styles'

export interface HeroProps {
  image: string
  title: string
  children: React.ReactNode
}

export const Hero = ({ image = '', title, children }: HeroProps) => {
  return (
    <>
      <Container
        css={{
          // backgroundImage: 'url(https://source.unsplash.com/random/1600x900)',
          backgroundImage: `url(${image})`,
        }}
      >
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      </Container>
    </>
  )
}
