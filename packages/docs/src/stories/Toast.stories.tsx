import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@norrels-ignite-ui/react'
import { useArgs } from '@storybook/client-api';
import { CircleNotch } from "phosphor-react";

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    isOpen: false
  },
  argTypes: {
    isOpen: {
      control: {
        type: 'null',
      },
    },
  },
  decorators: [
    (story) => {
      const [{ isOpen }, updateArgs] = useArgs();
      return (  
        <Box>
          <Button
            children={isOpen ? (<CircleNotch size={32} weight='bold'/>) : 'Agendar'}
            onClick={() => {
              updateArgs({isOpen: true})
              setTimeout(() => {
                updateArgs({isOpen: false})
              }, 3000);
            }}
            disabled={isOpen}
            variant={'loading'}
          />
          {story()}
        </Box>
      )
    }
  ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
}
