import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CircleAlert, Search } from '../Icon'
import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Contained = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
  children: 'Click Me',
  variant: 'contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Click Me',
  variant: 'outlined',
}

export const Text = Template.bind({})
Text.args = {
  children: 'Click Me',
  variant: 'text',
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  children: 'Click Me',
  variant: 'contained',
  startIcon: <Search />,
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  children: 'Click Me',
  variant: 'contained',
  endIcon: <Search />,
}
