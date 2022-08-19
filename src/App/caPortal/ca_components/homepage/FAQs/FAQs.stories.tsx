import React from "react";
import { FAQs, IFAQsProps } from "./FAQs";
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default {
    title: 'CaPortal/FAQs',
    component: FAQs,
} as ComponentMeta<typeof FAQs>;

/**Create Your template here */
const FAQsTemplate: ComponentStory<typeof FAQs> = (args:IFAQsProps) =>{

    return <FAQs {...args} />
};
export const Base = FAQsTemplate.bind({});

Base.args = {
    textColor: "black",
} as IFAQsProps;
