import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$white',
    color: '$gray600',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$poppins, sans-serif',
    fontWeight: 300,
  },

  ul: {
    listStyle: 'none',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 700,
    letterSpacing: '0.05rem',
    lineHeight: '1.3',
  },

  h1: {
    fontSize: '$4xl',

    '@bp_lg': {
      fontSize: '$6xl',
    },
  },

  h2: {
    fontSize: '@3xl',

    '@bp_lg': {
      fontSize: '$5xl',
    },
  },

  h3: {
    fontSize: '$2xl',

    '@bp_lg': {
      fontSize: '$4xl',
    },
  },

  h4: {
    fontSize: '$xl',
    fontWeight: 600,

    '@bp_lg': {
      fontSize: '$3xl',
    },
  },

  h5: {
    fontSize: '$lg',
    fontWeight: 300,

    '@bp_lg': {
      fontSize: '$2xl',
    },
  },

  h6: {
    fontSize: '$md',
    fontWeight: 600,

    '@bp_lg': {
      fontSize: '$xl',
    },
  },
})
