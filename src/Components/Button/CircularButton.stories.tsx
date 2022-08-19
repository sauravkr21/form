import React from 'react';
import { CircularButton } from './CircularButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/CircularButton',
  component: CircularButton,
} as ComponentMeta<typeof CircularButton>;

const CircularButtonTemplate: ComponentStory<typeof CircularButton> = (args) => <CircularButton {...args} />;


export const CircularButtonPrimary = CircularButtonTemplate.bind({});

CircularButtonPrimary.args = {
  onClick: () => alert('Hello')
};

