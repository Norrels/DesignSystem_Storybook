import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@norrels-ignite-ui/react'

export default {
    title: 'Surfaces/Tooltip',
    component: Tooltip,
    args: {},
    decorators: [
        (story) => {
            return(
                <Box>
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
