import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@norrels-ignite-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box
                    as="label"
                    css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    
                    {Story()}
                    <Text size='sm'>Acept terms of use</Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
