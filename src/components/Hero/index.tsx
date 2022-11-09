import React from 'react'
import { Container } from './styles'

export interface HeroProps {
  title: string
  children: React.ReactNode
}

export const Hero = ({ title, children }: HeroProps) => {
  return (
    <>
      <Container>
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      </Container>
    </>
  )
}
