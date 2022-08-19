import React from "react";
import './RadioButton.css';
export interface MultipleRadioButtonProps {
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Is it checked?
     */
    checked?: Array<boolean>;
    /**
     * What is the state of Radio Button?
     */
    disabled?: Array<boolean>;
    /**
     * Button should be labeled as?
     */
    label: Array<string>;
    /**
     * id for ith checkbox
     */
    id: Array<string>;
    /**
     * What to do if you click on it?
     */
    onChange?: any;

}
export const MultipleRadioButton = ({
    checked = [false, false, false, false],
    disabled = [false, false, false, false],
    label = [],
    //label = disabled ? 'Disabled' : checked ? 'Checked' : 'UnCheked',
    onChange,
    id = ["1st", "2nd", "3rd", "4th"],
    ...props
}: MultipleRadioButtonProps) => {
    for (var i = 0; i < checked.length; i++) {
        if (i == 0) label.push(i + 1 + "st Checkbox");
        else if (i == 1) label.push(i + 1 + "nd Checkbox");
        else if (i == 2) label.push(i + 1 + "rd Checkbox");
        else label.push(i + 1 + "th Checkbox");
    }
    return (
        <div className="WrapperRadioButton" {...props}>
            <h4>Check some radio buttons</h4>
            
            {checked.map(({ }, index) => {
                return (
                    <div className="radio-box-container">
                        <label className="radioBox">
                            <input
                                disabled={disabled[index]}
                                checked={checked[index]}
                                type="radio"
                                value={label[index]}
                                className="default-radio-button"
                                id={id[index]}
                                onClick={() => onChange(index)}
                            />
                            <div className="radioIcon"></div>
                            <div className="radioIcon-inner"></div>
                            <div className="radioLabel">
                                <span>{label[index]}</span>
                            </div>
                        </label>
                    </div>
                )
            })}

            <div className="checkBoxDetails">
                <ul>
                    <h4>Un-Checked Boxes are - </h4>
                    {checked.map(({ }, index) => {
                        return (
                            <div>{!checked[index] && <li> {label[index]} </li>}</div>
                        )
                    })}
                </ul>
                <ul>
                    <h4>Checked Boxes are - </h4>
                    {checked.map(({ }, index) => {
                        return (
                            <div>{checked[index] && <li> {label[index]} </li>}</div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}