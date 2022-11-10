import { styled } from '../../styles'

export const Container = styled('main', {
  backgroundSize: 'cover !important',
  backgroundPosition: 'center !important',
  backgroundBlendMode: 'overlay !important',
  backgroundRepeat: 'no-repeat !important',

  width: '100%',

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

    h1: {
      position: 'relative',
      fontWeight: 700,
      letterSpacing: '0.05rem',
      marginBottom: '25px',
      paddingBottom: '25px',

      borderBottom: '1px solid rgba(255,255,255,0.2)',

      fontSize: '2.5rem',

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
    },

    ul: {
      paddingLeft: '0',
      marginTop: '1.25rem',

      li: {
        '&::before': {
          content: '\\2713\\0020',
          color: '$yellow500',
        },
      },
    },
  },
})
