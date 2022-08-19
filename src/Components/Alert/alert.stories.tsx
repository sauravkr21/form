import React from "react";
import { Alert } from "./alert";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    title: "Components/Alert",
    component: Alert,
} as ComponentMeta<typeof Alert>;

const AlertTemplate: ComponentStory<typeof Alert> = (args) => <Alert {...args}/>

export const Danger = AlertTemplate.bind({});
Danger.args = {
    type : 'danger',
    label : 'Please enter a valid email address!',
    onClick: () => alert('ok'),
}


export const Success = AlertTemplate.bind({});
Success.args = {
    type : 'success',
    label : 'Please enter a valid email address!',
    onClick: () => alert('ok'),
}