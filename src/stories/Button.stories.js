import React from 'react';

import { Button } from './Button';

export default {
  title: 'Bayern Storybook/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'הוספה לעגלה',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'החל',
};

export const secondaryWithIcon = Template.bind({});
Secondary.args = {
  label: 'הוספה לעגלה',
};