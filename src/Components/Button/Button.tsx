import React from 'react'
import './Button.css';
// import styled from 'styled-components';
import classnames from "classnames";

export interface ButtonProps {
    /**
     * Type of button?
     */
    type?: 'primary' | 'secondary' | 'alternate';
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Icon present or no?
     */
    hasIcon?: boolean;
    /**
     * Icon link
     */
    icon?: string;
    /**
     * Button contents
     */
    label?: string;
    /**
     * Visually and functionally disable the button.
     */
    disabled?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export interface CircularButtonProps {
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Icon present or no?
     */
    icon?: string;
    /**
     * Button contents
     */
    disabled?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export const Button = ({
    type = 'primary',
    size = 'small',
    label = 'Press Here',
    hasIcon = false,
    disabled = false,
    ...props
}: ButtonProps) => {
    return (
        <button className={
            classnames(
                "cw-button",
                "cw-button--" + type
            )}
            disabled={disabled}
            {...props}>
            <div className="cw-button-frame">
                {hasIcon ?
                    <svg className='cw-button-icon-left' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.16659 8.31367V9.53283C7.63862 9.34617 7.07358 9.28891 6.5189 9.36588C5.96423 9.44284 5.43612 9.65177 4.97892 9.97512C4.52172 10.2985 4.14879 10.7268 3.89143 11.2242C3.63407 11.7215 3.49981 12.2733 3.49992 12.8333L2.33325 12.8327C2.33307 12.1204 2.49596 11.4175 2.80943 10.7779C3.1229 10.1383 3.57863 9.57888 4.14171 9.1426C4.70479 8.70633 5.36027 8.40474 6.05792 8.26096C6.75558 8.11717 7.47689 8.135 8.16659 8.31308V8.31367ZM6.99992 7.58333C5.06617 7.58333 3.49992 6.01708 3.49992 4.08333C3.49992 2.14958 5.06617 0.583332 6.99992 0.583332C8.93367 0.583332 10.4999 2.14958 10.4999 4.08333C10.4999 6.01708 8.93367 7.58333 6.99992 7.58333ZM6.99992 6.41667C8.28909 6.41667 9.33325 5.3725 9.33325 4.08333C9.33325 2.79417 8.28909 1.75 6.99992 1.75C5.71075 1.75 4.66659 2.79417 4.66659 4.08333C4.66659 5.3725 5.71075 6.41667 6.99992 6.41667ZM10.4999 9.91667V8.16667H11.6666V9.91667H13.4166V11.0833H11.6666V12.8333H10.4999V11.0833H8.74992V9.91667H10.4999Z" fill="white" />
                    </svg>
                    : null}
                <span>{label}</span>
            </div>
        </button>
    )
}