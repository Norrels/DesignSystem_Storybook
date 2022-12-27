import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@norrels-ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga dolores ad quae iste, ipsum similique obcaecati possimus culpa neque. Esse, doloribus! Velit at, quaerat eos aliquam magnam veniam iusto.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}
