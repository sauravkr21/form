import React from "react";
import './RadioButton.css';
export interface RadioButtonProps {
    /**
     * Is it checked?
     */
    checked?: boolean;
    /**
     * What is the state of Radio Button?
     */
    disabled?: boolean;
    /**
     * Button should be labeled as?
     */
    label: string;
    /**
     * What to do if you click on it?
     */
    onChange?: any;

}
export const RadioButton = ({
    checked = false,
    disabled = false,
    label = disabled? 'Disabled': checked? 'Checked':'UnCheked',
    onChange,
    ...props
}: RadioButtonProps) => {
    return (
        <div className="WrapperRadioButton" {...props}>
            <label className="radioBox">
                <input
                    disabled={disabled}
                    checked={checked}
                    type="radio"
                    name={label}
                    value={label}
                    className="default-radio-button"
                    onClick={onChange}
                />
                <div className="radioIcon"></div>  
                <div className="radioIcon-inner"></div>
                <div className="radioLabel">
                    <span>{label}</span>
                </div>
            </label>     
        </div>
    )
}