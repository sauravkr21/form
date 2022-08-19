import React from "react";
import { MultipleCheckBox} from "./MultipleCheckBox";
import { MultipleCheckBoxProps } from "./MultipleCheckBox";
import { ComponentStory, ComponentMeta} from '@storybook/react'
import { useState } from "react"
export default {
    title: 'Components/MultipleCheckBox',
    component: MultipleCheckBox,
} as ComponentMeta<typeof MultipleCheckBox>;


const CheckBoxTemplate: ComponentStory<typeof MultipleCheckBox> = (args:MultipleCheckBoxProps) => {
    const [value, setValue] = useState<Array<boolean>>(args.checked ? args.checked: [])
    //const[value, setValue] = useState(new Array(args.checked ? args.checked.length: 5).fill(false));
    const func = (position:number) => {
        const updatedCheckedState = value.map((item, index) =>
      index === position ? !item : item
    );
    
    args.checked = updatedCheckedState;
    
    setValue(updatedCheckedState);
    };


return <MultipleCheckBox {...args} checked={value} onChange={func} />;
}


export const Base = CheckBoxTemplate.bind({});

Base.args = {
    checked:[false,false,false, false, false, true],
};

export const Disabled = CheckBoxTemplate.bind({});

Disabled.args = {
    disabled: [true,true,true,true, true],
    checked:[false,false,false, false, false],

};
