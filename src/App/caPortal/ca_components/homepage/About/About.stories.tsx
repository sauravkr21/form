import React from "react";
import { About, IAboutProps } from "./About";
import {ComponentStory, ComponentMeta} from '@storybook/react'

export default {
    title: 'CaPortal/About',
    component: About,
} as ComponentMeta<typeof About>;

/**Create Your template here */
const AboutTemplate: ComponentStory<typeof About> = (args:IAboutProps) =>{

    return <About {...args} />
};
export const Base = AboutTemplate.bind({});

Base.args = {
    height: "95%",
    width: "100%",
    textColor: "black",
    aboutUs: "Insert a Long About Us Text Here",
    textFontSize: "1rem",
    textFontFamily: "sans-serif",
    textFontWeight: "normal",
    textFontStyle: "normal",
    textFontVariant: "normal",
} as IAboutProps;

export const SmallText = AboutTemplate.bind({});
SmallText.args = {
    height: "95%",
    width: "100%",
    title: "Campus Ambassador",
    textColor: "black",
    aboutUs: "Insert a Long About Us Text Here",
    textFontSize: "0.25rem",
    textFontFamily: "sans-serif",
    textFontWeight: "normal",
    textFontStyle: "normal",
    textFontVariant: "normal",
} as IAboutProps;

export const WithTitleAndText = AboutTemplate.bind({});
WithTitleAndText.args = {
    height: "95%",
    width: "100%",
    title: "Campus Ambassador",
    textColor: "blue",
    aboutUs: "Insert a Long About Us Text Here",
    textFontSize: "1.5em",
    textFontFamily: "sans-serif",
    textFontWeight: "normal",
    textFontStyle: "normal",
    textFontVariant: "normal",
} as IAboutProps;

export const WithTitleAndTextAndColor = AboutTemplate.bind({});
WithTitleAndTextAndColor.args = {
    height: "95%",
    width: "100%",
    title: "Campus Ambassador",
    textColor: "#2BFFFF",
    aboutUs: "Insert a Long About Us Text Here",
    textFontSize: "1.5em",
    textFontFamily: "sans-serif",
    textFontWeight: "normal",
    textFontStyle: "normal",
    textFontVariant: "normal",
} as IAboutProps;