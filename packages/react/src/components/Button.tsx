import { keyframes, styled } from "../styles";
import { ComponentProps, ElementType } from 'react'

const spin = keyframes({
  from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
})

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          borderColor: '$gray200'
        },

      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          backgroundColor: '$gray600',
        },
      },

      loading: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },

        svg: {
          animation: `${spin} 1s linear infinite`,
      }
      }
    },

    size: {
      sm: {
        height: 38
      },

      md: {
        padding: '0 $4',
        height: 46,
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'