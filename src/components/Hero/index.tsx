import React from 'react'
import { Container } from './styles'

export interface HeroProps {
  image: string
  title: React.ReactNode | string
  children: React.ReactNode
}

export const Hero = ({ image = '', title, children }: HeroProps) => {
  return (
    <>
      <Container
        css={{
          background: image,
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
