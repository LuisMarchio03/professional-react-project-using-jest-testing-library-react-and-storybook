import { styled } from '../../styles'

export const Button = styled('button', {
  fontSize: '$md',
  fontWeight: 600,
  textTransform: 'uppercase',
  padding: '12px 36px',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$yellow500',
        border: '2px solid $yellow500',
        color: '$gray600',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '2px solid $yellow500',
        color: '$yellow500',
      },
    },
  },
})
