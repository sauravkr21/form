import React from "react";
import { RadioButton, RadioButtonProps } from "./RadioButton";
import {ComponentStory, ComponentMeta} from '@storybook/react'
import { useArgs, useState } from "@storybook/addons";
import { __values } from "tslib";

export default {
    title: 'Components/RadioButton',
    component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const RadioButtonTemplate: ComponentStory<typeof RadioButton> = (args:RadioButtonProps) =>{ 
const [value, setValue] = useState<true | false>(false);
const [_, updateArgs] = useArgs();
const func = () => {
    setValue(!value);
    updateArgs({...args, checked: !args.checked})

}
return <RadioButton {...args}  onChange={func} />
}

export const Base = RadioButtonTemplate.bind({});

Base.args = {
    disabled: false,
    checked:false,
};

export const Selected = RadioButtonTemplate.bind({});

Selected.args = {
    disabled:false,
    checked:true,
}


export const Disabled = RadioButtonTemplate.bind({});

Disabled.args = {
    disabled:true,
}