import React from "react";
import { MultipleRadioButton, MultipleRadioButtonProps } from "./MultipleRadioButton";
import {ComponentStory, ComponentMeta} from '@storybook/react'
import { useState } from "@storybook/addons";
import { __values } from "tslib";

export default {
    title: 'Components/MultipleRadioButton',
    component: MultipleRadioButton
} as ComponentMeta<typeof MultipleRadioButton>;

const MultipleRadioButtonTemplate: ComponentStory<typeof MultipleRadioButton> = (args:MultipleRadioButtonProps) =>{ 
const [value, setValue] = useState(new Array(5).fill(false));
const func = (position:number) => {
    const updatedCheckedState = value.map((item, index) =>
      index === position ? !item : item
    );
    setValue(updatedCheckedState);
}
return <MultipleRadioButton {...args} checked={value} onChange={func} />
}


export const Base = MultipleRadioButtonTemplate.bind({});

Base.args = {
    disabled: [false,false,false,false],
};

export const Disabled = MultipleRadioButtonTemplate.bind({});


Disabled.args = {
    disabled: [true,true,true,true, true],
    checked: [false,false,false,false],
};
