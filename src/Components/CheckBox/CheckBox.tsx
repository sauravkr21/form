import React from 'react'
import './CheckBox.css'

export interface CheckBoxProps {

    /**
     * What is the state of Radio Button?
     */
    checked?: boolean;
    /**
     * Disabled?
     */
    disabled?: boolean;
    /**
     * Button should be labeled as?
     */
    labelText: string;
    /**
     * What to do if you click on it?
     */
    onChange?: any;
}

export const CheckBox = ({
    checked = false,
    disabled = false,
    labelText = disabled ? 'Disabled' : checked ? 'Checked' : 'UnCheked',
    onChange,
    ...props
}: CheckBoxProps) => {
    return (
        <div className="wrapperCheckBox" {...props}>
            <div>
                <label className="box">
                    <input
                        disabled={disabled}
                        checked={checked}
                        type="checkbox"
                        name={labelText}
                        value={labelText}
                        className="defualt-checkbox"
                        onChange={onChange}
                        id={labelText}
                    />
                    <div className="outer-rect">
                    </div>
                    <div className='check-vector-div1'>
                        <div className="check-vector-div2">
                            <div className="check-vector-div3"></div>
                        </div>
                    </div>
                    <div className="label-text">
                        <span>{labelText}</span>
                    </div>
                </label>
            </div>
        </div>
    )
}
