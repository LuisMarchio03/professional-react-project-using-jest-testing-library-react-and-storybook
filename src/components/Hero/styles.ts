import { styled } from '../../styles'

interface IStylesContainerProps {
  image?: string
}

export const Container = styled('main', {
  background: `url(${(props: IStylesContainerProps) =>
    props.image}) no-repeat center`,

  h1: {
    color: 'red',
  },
})
