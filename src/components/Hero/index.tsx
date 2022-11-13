import React from 'react'
import { Container } from './styles'

export interface HeroProps {
  image: string
  children: React.ReactNode
}

export const Hero = ({ image = '', children }: HeroProps) => {
  return (
    <>
      <Container
        css={{
          background: image,
        }}
        data-testid="hero"
      >
        <div>{children}</div>
      </Container>
    </>
  )
}
