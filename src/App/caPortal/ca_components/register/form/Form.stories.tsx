import React from "react";
import { Form, IFormProps } from "./Form";
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default {
    title: 'CaPortal/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

/**Create Your template here */
const FormTemplate: ComponentStory<typeof Form> = (args:IFormProps) =>{

    return <Form {...args} />
};
export const Base = FormTemplate.bind({});

Base.args = {
    textColor: "black",
} as IFormProps;
