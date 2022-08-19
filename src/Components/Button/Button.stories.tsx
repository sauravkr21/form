import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Primary = ButtonTemplate.bind({});

Primary.args = {
  onClick: () => alert('Hello'),
  type: 'primary',
  label: 'Say hello',
};


export const Secondary = ButtonTemplate.bind({});

Secondary.args = {
  onClick: () => alert('Hello'),
  type: 'secondary',
  label: 'Say hello',
};


export const Alternate = ButtonTemplate.bind({});

Alternate.args = {
  onClick: () => alert('Hello'),
  type: 'alternate',
  label: 'Say hello',
};

