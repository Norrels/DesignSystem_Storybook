import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps  } from '@norrels-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,   
  args: {
    src: 'https://github.com/Norrels.png'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WitFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
