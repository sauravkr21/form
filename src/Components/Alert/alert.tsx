import React from "react";
import './alert.css';
import classnames from "classnames";
export interface AlertProps {
    /**
     * How large should be alert message
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Type of alert
     */
    type?: 'danger' | 'success' | 'info' | 'warning';
    /**
     * Alert should be labeled as?
     */
    label: string;
    /**
     * What to do if you click on it?
     */
    onClick?: () => void;
}

export const Alert = ({
    type = 'danger',
    label = "Please enter unique email to create an account",
    onClick,
    ...props
}: AlertProps) => {
    return (
        <div className="alert-wrapper" {...props}>
            <div className={
                classnames(
                    "alert-text-box",
                    "alert-text-box--" + type,
                )
            }>
                <div className="alert-text-content">
                    <div className="alert-content">
                        <div className="alert-icon">
                            {type === "danger" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" fill="#E93C3C" />
                            </svg>}
                            {type === "success" && <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_730_44820)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 0.75C19.0225 0.75 24.5 6.2275 24.5 13C24.5 19.7725 19.0225 25.25 12.25 25.25C5.4775 25.25 0 19.7725 0 13C0 6.2275 5.4775 0.75 12.25 0.75ZM4.95906 13.4812L6.25428 12.186L9.95527 15.887L18.2822 7.56008C18.7264 8.00423 19.1334 8.41132 19.5774 8.8553C16.3577 12.075 13.175 15.2577 9.95505 18.4777C8.28966 16.8123 6.62423 15.1469 4.9588 13.4814L4.95906 13.4812Z" fill="#36953D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_730_44820">
                                        <rect width="24.5" height="24.5" fill="white" transform="translate(0 0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            }
                        </div>
                        <div className="text">
                            {label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}