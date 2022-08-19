import React from "react";
import {CheckBox, CheckBoxProps} from "./CheckBox"
import { ComponentStory, ComponentMeta} from '@storybook/react'
import { useArgs } from "@storybook/addons";
export default {
    title: 'Components/CheckBox',
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

/* let value = false;
const Checkfunc = () => {
    value = !value;
    alert('Box has changed its state');
} */
const CheckBoxTemplate: ComponentStory<typeof CheckBox> = (args:CheckBoxProps) => {
    const [_, updateArgs] = useArgs();
    const func = () => {
        updateArgs({...args, checked: !args.checked})
    };
return <CheckBox {...args}  onChange={func}/>;
}


export const Base = CheckBoxTemplate.bind({});

Base.args = {
    disabled: false,
    checked:false,
};

export const Disabled = CheckBoxTemplate.bind({});

Disabled.args = {
    disabled: true,
};
