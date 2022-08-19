import React from "react";
import "./link.css";

export interface LinkProps {
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
    * Link label
    */
    label: string;
    /**
    * Link to redirect
    */
    link: string;
    /**
    * Visually and functionally disable the button.
    */
    disabled?: boolean;
}

export const Link = ({
    label = "link",
    disabled = false,
    link,
    ...props
}: LinkProps) => {
    return (
        <div className="linkWrapper" {...props}>
            {disabled ? <a className="disabled-link">
                <div className="link-button">
                    <div className="link-style link-style-disabled">
                        <span>{label}</span>
                    </div>
                </div>
            </a> :
                <a href={link} target="_blank" rel="noreferrer">
                    <div className="link-button">
                        <div className="link-style">
                            <span>{label}</span>
                        </div>
                    </div>
                </a>
            }
        </div>
    )
}