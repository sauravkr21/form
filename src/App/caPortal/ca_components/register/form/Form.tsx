import React from 'react';
import './Form.css';
import { Button } from '../../../../../Components/Button/Button';

export interface IFormProps {
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
     * Form Us text
     */
    FormUs?: string;
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

export const Form = ({
    height = "90%",
    width = "100%",
    
}: IFormProps) => {
    return (
        <>
        <div className="Form" style={{width: width, height: height}}>
        <Button
  label="Say hello"
  onClick={() => {}}
  type="primary"
/>
        </div>
        </>
    );

}