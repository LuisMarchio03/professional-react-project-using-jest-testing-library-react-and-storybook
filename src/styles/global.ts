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
    fontSize: '2.5rem',

    '@bp_lg': {
      fontSize: '3.75rem',
    },
  },

  h2: {
    fontSize: '2rem',

    '@bp_lg': {
      fontSize: '3.125rem',
    },
  },

  h3: {
    fontSize: '1.9rem',

    '@bp_lg': {
      fontSize: '2.5rem',
    },
  },

  h4: {
    fontSize: '1.3rem',
    fontWeight: 600,

    '@bp_lg': {
      fontSize: '2.125rem',
    },
  },

  h5: {
    fontSize: '1.2rem',
    fontWeight: 300,

    '@bp_lg': {
      fontSize: '1.5rem',
    },
  },

  h6: {
    fontSize: '1.1rem',
    fontWeight: 600,

    '@bp_lg': {
      fontSize: '1.25rem',
    },
  },
})
