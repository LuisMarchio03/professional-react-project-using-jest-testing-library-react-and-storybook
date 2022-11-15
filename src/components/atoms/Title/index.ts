import { styled } from '../../../styles'

export const Title = styled('h1', {
  position: 'relative',
  // fontWeight: 700,
  letterSpacing: '0.05rem',
  marginBottom: '25px',
  paddingBottom: '25px',

  borderBottom: '1px solid rgba(255,255,255,0.2)',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-3px',
    backgroundColor: '$yellow500',
    width: '70px',
    height: '5px',
  },

  strong: {
    color: '$yellow500',
  },
})
