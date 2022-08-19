import React from "react";
import classnames from "classnames";
import './slider.css'

export interface SliderInputprops {
    /**
     * min
     */
    min:number;
    /**
     * max
     */
    max:number;
    /**
     * Button should be labeled as?
     */
    label: string;
    /**
     * Disabled?
     */
    disabled:boolean;
    /**
     * Where should be the pointer on the base line in percentage?
     */
    value: number;
    /**
     * What to do if you change on it?
     */
    onChange?: (event:any) => void;
}

export const SliderInput = ({
    label = 'Move the slider to adjust',
    value = 50,
    onChange,
    min = 0,
    max = 100,
    disabled=false,
    ...props
}: SliderInputprops) => {
    const state = disabled === true? "disabled":"default";
    return (
        <div className="sliderWrapper" {...props}>
            <div className="sliderBox">
                <div className={
                    classnames(
                        "sliderBase",
                        "sliderBase--"+state
                    )
                }>

                </div>
                <div className="sliderFill" style={{ width: value + '%' }}>
                    <div className={
                        classnames(
                            "fillRectangle",
                            "fillRectangle--"+state
                        )
                    }></div>
                </div>
                <div className={
                    classnames(
                        "sliderHandle",
                        "sliderHandle--" + state,
                    )}>
                    <div className={
                        classnames(
                            "sliderCircle",
                            "sliderCircle--"+state
                        )}style={{ left: value - 1+ '%' }}>
                        <div className={
                            classnames(
                                "fillCircle",
                                "fillCircle--" + state
                            )}>

                        </div>
                        {!disabled && <div className="showValue">
                            {(value-min)%(max-min+1)}
                        </div>}
                    </div>
                </div>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                disabled={disabled}
                onChange={onChange}
                className="thumb thumb--right"
            />
        </div>
    )
}
