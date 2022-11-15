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

    button: {
      marginTop: '1.2rem',
    },
  },
})
