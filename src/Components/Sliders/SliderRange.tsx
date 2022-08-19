import React, { useState } from "react";

import { Range, Direction } from "react-range";
import './SliderRange.css';

export interface SliderRangeProps {
    /**
     * Min step 
     */
    step?: number;
    /**
     * min 
     */
    min?: number;
    /**
     * max
     */
    max?: number;
    /**
     * state
     */
    disabled?: boolean;
    /**
     * Intial value between min and max
     */
    initialValue:number;

}

export const SliderRange = ({
    step = 0.1,
    min = 0,
    max = 100,
    disabled = false,
    initialValue=50,
    ...props
}: SliderRangeProps) => {

    const valuesArray = [initialValue];
    const [value, setValue] = useState(valuesArray);
    const getTrack = () => {
        // sort values ascending
        const direction = Direction.Right;
        const middle = disabled? `0%`:`${(value[0] - min)/(max - min)*100}%`;
        
        return `linear-gradient(${direction}, #4263EB , #AC066A ${middle}, #CCC ${middle} 100%)`;
    };

    if(step === 0) step = 1; // to prevent steps being infinite
    return (
        <div className="sliderRangeWrapper" {...props}>
            <Range
                disabled={disabled}
                values={value}
                step={step}
                min={min}
                max={max}
                onChange={(values) => setValue(values)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "14px",
                            display: "flex",
                            width: "100%"
                        }}
                    >

                        <div
                            ref={props.ref}
                            style={{
                                height: "4px",
                                width: "320px",
                                borderRadius: "4px",
                                background: getTrack(),
                                /* background:"linear-gradient(90deg, #4263EB  , #AC066A {middle}%, #CCC 50% 100%)", */
                                /* background: getTrackBackground({
                                    values: value,
                                    colors: ["#AC066A", "#725EDE 5%"],
                                    min: min,
                                    max: max
                                }), */
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            cursor: "pointer",
                            height: "14px",
                            width: "14px",
                            borderRadius: "50%",
                            backgroundColor: "#FFF",
                            boxSizing: "border-box",
                            border:disabled?"2px solid #AEAEAE": "2px solid #AC066A",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <div
                            style={{
                                height: "14px",
                                width: "14px",
                                
                            }}
                        />
                    </div>
                )}
            />
            <output style={{ position: "absolute", marginTop: "30px", width: "320px", left: "160px" }} id="output">
                {value[0].toFixed(1)}
            </output>
        </div>
    )
}
