import { styled } from '../../styles'

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

        '&:hover': {
          backgroundColor: '$yellow700',
        },

        '&:disabled': {
          backgroundColor: '$yellow700',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '2px solid $yellow500',
        color: '$yellow500',

        '&:hover': {
          color: '$yellow700',
          border: '2px solid $yellow700',
        },

        '&:disabled': {
          color: '$yellow700',
          border: '2px solid $yellow700',
          cursor: 'not-allowed',
        },
      },
      danger: {
        backgroundColor: 'transparent',
        border: '2px solid $red500',
        color: '$red500',

        '&:hover': {
          color: '$red700',
          border: '2px solid $red700',
        },

        '&:disabled': {
          color: '$red700',
          border: '2px solid $red700',
          cursor: 'not-allowed',
        },
      },
    },
  },
})
