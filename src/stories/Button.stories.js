import React from 'react';

import { Button } from './Button';

export default {
  title: 'Bayern Storybook/Button',
  component: Button,
  argTypes: {
    icon: {
      control:{
        type: 'select',
        options: ['add', 'remove', 'close',]
      }
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'הוספה לעגלה',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'החל',
  primary: false,

};

export const secondaryWithIcon = Template.bind({});
secondaryWithIcon.args = {
  label: 'הוספה לעגלה',
  primary: false,
  icon: 'add',
};