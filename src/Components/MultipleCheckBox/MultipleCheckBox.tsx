import React from 'react'
import './MultipleCheckBox.css'

export interface MultipleCheckBoxProps {
    /**
     * What is the state of Radio Button?
     */
    checked?: Array<boolean>;
    /**
     * Disabled?
     */
    disabled?: Array<boolean>;
    /**
     * Button should be labeled as?
     */
    label: Array<string>;
    /**
     * No of checkboxes
     */
    id: Array<string>;
    /**
     * What to do if you click on it?
     */
    onChange?: any;

}



export const MultipleCheckBox = ({
    checked = [false, false, false, false],
    disabled = [false, false, false, false],
    label = [],
    //label = disabled ? 'Disabled' : checked ? 'Checked' : 'UnCheked',
    onChange,
    id = ["1st", "2nd", "3rd", "4th"],
    ...props
}: MultipleCheckBoxProps) => {
    for(var i = 0; i < checked.length; i++){
        if(i == 0) label.push( i + 1 + "st Checkbox");
        else if(i == 1) label.push( i + 1 + "nd Checkbox");
        else if(i == 2) label.push( i + 1 + "rd Checkbox");
        else label.push( i+1 + "th Checkbox");
    }
    return (
        <div className="wrapperCheckBox" {...props}>
            <h3>Check some boxes</h3>
            {checked.map(({ }, index) => {
                return (
                    <div className="check-box-container">
                        <label className="box">
                            <input
                                disabled={disabled[index]}
                                checked={checked[index]}
                                type="checkbox"
                                value={label[index]}
                                className="defualt-checkbox"
                                onChange={() => onChange(index)}
                                id={id[index]}
                            />
                            <div className="outer-rect">
                            </div>
                            <div className='check-vector-div1'>
                                <div className="check-vector-div2">
                                    <div className="check-vector-div3"></div>
                                </div>
                            </div>
                            <div className="label-text">
                                <span>{label[index]}</span>
                            </div>
                        </label>
                    </div>
                )
            })}
            <div className="checkBoxDetails">
            <ul>
                    <span>Un-Checked Boxes are - </span>
                    {checked.map(({ }, index) => {
                        return (
                            <div>{!checked[index] && <li> {label[index]} </li>}</div>
                        )
                    })}
                </ul>
                <ul>
                    <span>Checked Boxes are - </span>
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