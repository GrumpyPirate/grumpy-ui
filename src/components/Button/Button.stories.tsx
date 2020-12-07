import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import Button, { Props } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {} as Props;
