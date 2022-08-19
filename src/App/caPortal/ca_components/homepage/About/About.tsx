import React from 'react';
import './About.css';

export interface IAboutProps {
    /**
     * Hieght of the component
     * @type {string}
     */
    height?: string;
    /**
     * Width of the component
     * @type {string}
     */
    width?: string;
    /**
     * The title of the page.
     */
    title?: string;
    /**
     * Text color of the text.
     */
    textColor: string;
    /**
     * About Us text
     */
    aboutUs?: string;
    /**
     * Text Font Size
     */
    textFontSize?: string;
    /**
     * Text Font Family
     */
    textFontFamily?: string;
    /**
     * Text Font Weight
     */
    textFontWeight?: string;
    /**
     * Text Font Style
     */
    textFontStyle?: string;
    /**
     * Text Font Variant
     */
    textFontVariant?: string;
    // Other props here...
}

export const About = ({
    height = "90%",
    width = "100%",
    title = "Campus Ambassador",
    textColor = "black",
    aboutUs = "Insert a Long About Us Text Here",
    textFontSize = "1.5em",
    textFontFamily = "sans-serif",
    textFontWeight = "normal",
    textFontStyle = "normal",
    textFontVariant = "normal",
}: IAboutProps) => {
    return (
        /** Insert a beautiful About us Content in below Division. This is a dummy example */
        <div className="About" style={{width: width, height: height}}>
            <h2 style={{color: textColor}}>{title}</h2>
            <p style={{ color: textColor, fontSize: textFontSize, fontFamily: textFontFamily, fontWeight: textFontWeight, fontStyle: textFontStyle, fontVariant: textFontVariant }}>{aboutUs}</p>
        </div>
    );

}