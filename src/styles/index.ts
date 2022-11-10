import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      gray600: '#212121',

      yellow500: '#ffc107',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },

    fonts: {
      roboto: 'Roboto',
      poppins: 'Poppins',
    },
  },

  media: {
    bp_sm: '(min-width: 576px)',
    bp_md: '(min-width: 768px)',
    bp_lg: '(min-width: 992px)',
    bp_xl: '(min-width: 1200px)',
  },
})
