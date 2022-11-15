import { styled } from '../../../styles'

export const Button = styled('button', {
  fontSize: '$md',
  fontWeight: 600,
  textTransform: 'uppercase',
  padding: '12px 36px',
  cursor: 'pointer',

  transition: '0.2s',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$yellow500',
        border: '2px solid $yellow500',
        color: '$gray600',

        '&:hover:enabled': {
          backgroundColor: '$yellow700',
        },

        '&:disabled': {
          opacity: 0.7,
          backgroundColor: '$yellow700',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '2px solid $yellow500',
        color: '$yellow500',

        '&:hover:enabled': {
          color: '$yellow700',
          border: '2px solid $yellow700',
        },

        '&:disabled': {
          opacity: 0.7,
          color: '$yellow700',
          border: '2px solid $yellow700',
          cursor: 'not-allowed',
        },
      },
      danger: {
        backgroundColor: 'transparent',
        border: '2px solid $red500',
        color: '$red500',

        '&:hover:enabled': {
          color: '$red700',
          border: '2px solid $red700',
        },

        '&:disabled': {
          opacity: 0.7,
          color: '$red700',
          border: '2px solid $red700',
          cursor: 'not-allowed',
        },
      },
    },
  },
})
