import { styled } from '../../styles'

export const Container = styled('main', {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'overlay',
  backgroundRepeat: 'no-repeat',

  width: '100%',
  height: '100vh',

  color: '$white',
  padding: '6.25rem 0',

  div: {
    width: '100%',
    padding: '0  8px',

    '@bp_md': {
      padding: '0  16px',
    },

    '@bp_xl': {
      width: '1140px',
      margin: '0 auto',
    },
  },

  h1: {
    fontWeight: 700,
    letterSpacing: '0.05rem',
  },
})
