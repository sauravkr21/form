import React from "react";
import { SliderRange } from "./SliderRange";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default{
    title:'Components/SliderRange',
    component: SliderRange
} as ComponentMeta<typeof SliderRange>;

const SliderRangeTemplate: ComponentStory<typeof SliderRange> = (args) =>{

return <SliderRange  {...args}   />}

export const Default = SliderRangeTemplate.bind({});

Default.args = {
    disabled:false,
    min:0,
    max:100,
    step:1,
    initialValue:50,
} 

export const Disabled = SliderRangeTemplate.bind({});

Disabled.args = {
    disabled:true,
    step:1,
    min:0,
    max:100,
    initialValue:50,
}