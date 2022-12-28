import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@norrels-ignite-ui/react'
import { CircleNotch } from "phosphor-react";

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'terciary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'

      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    variant: 'loading',
    children: (
        <CircleNotch size={32} weight='bold'/>
    ),
  },

}


export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}