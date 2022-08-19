import React from "react";
import { CircularIconButton } from "./CircularIconButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    title: "Components/CircularIconButton",
    component : CircularIconButton
} as ComponentMeta<typeof CircularIconButton>;

const CircularIconButtonTemplate: ComponentStory<typeof CircularIconButton> = (args) => <CircularIconButton {...args}/>

export const Add = CircularIconButtonTemplate.bind({});

Add.args = {
    type: 'primary',
    iconType: 'add',
    onClick: () => {alert('ok')},
}
export const Edit = CircularIconButtonTemplate.bind({});

Edit.args = {
    type: 'primary',
    iconType: 'edit',
    onClick: () => {alert('ok')},
}
export const Trash = CircularIconButtonTemplate.bind({});

Trash.args = {
    type: 'primary',
    iconType: 'trash',
    onClick: () => {alert('ok')},
}
export const GoTo = CircularIconButtonTemplate.bind({});

GoTo.args = {
    type: 'primary',
    iconType: 'goTo',
    onClick: () => {alert('ok')},
}
export const Go_back = CircularIconButtonTemplate.bind({});

Go_back.args = {
    type: 'primary',
    iconType: 'go_back',
    onClick: () => {alert('ok')},
}