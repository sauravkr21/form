import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import{ComponentMeta, ComponentStory} from '@storybook/react'
export default {
    title: 'Components/ToggleButtons',
    component: ToggleButton
}as ComponentMeta<typeof ToggleButton>;


const ToggleButtontemplate: ComponentStory<typeof ToggleButton> = (args) => {
    const [value, setValue] = useState<true | false>(false);
    const func = () => {setValue(!value)}
    return <ToggleButton {...args} isOn={value}  handleToggle={func}/>}

    const ToggleButtontemplate2: ComponentStory<typeof ToggleButton> = (args) => {
        const [value, setValue] = useState<true | false>(true);
        const func = () => {setValue(!value)}
        return <ToggleButton {...args} isOn={value}  handleToggle={func}/>}
    
export const Off = ToggleButtontemplate.bind({});

Off.args = {
    disabled:false,
}
export const On = ToggleButtontemplate2.bind({});

On.args = {
    
}
export const Disabled = ToggleButtontemplate.bind({});

Disabled.args = {
    disabled: true,
}