import React from 'react';
import ReactSwitch from 'react-switch';
import './ToggleButton.css'
export interface ToggleButtonProps {
  /**
   * 
   */
  isOn?: boolean,
  handleToggle: any,
  label?: string,
  disabled?: boolean,
}

export const ToggleButton = ({
  isOn = false,
  handleToggle,
  disabled = false,
  label = disabled? "disabled" : isOn ? "on" : "off",
  
}: ToggleButtonProps) => {
  return (

    <div className="toggle-wrapper">
      {/* Creating Border Box for unchecked toggle button */}
      {!isOn && !disabled && <div className='toggle-switch-border'></div>}  
      {!isOn && disabled && <div className='toggle-switch-border--disabled'></div>} 
      <label htmlFor="material-switch" className='toggle-switch'> 
        <ReactSwitch
          checked={isOn}
          disabled={disabled}
          onChange={handleToggle}
          onColor="#009ACF"
          offColor='#FFFFFF'
          onHandleColor="#FFFFFF"
          offHandleColor='#AEAEAE'
          borderRadius={14}
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0rem 0rem 0rem #2B2B2B"
          activeBoxShadow="0rem 0rem 0rem 0rem #2B2B2B"
          height={28}
          width={52}
          className="react-switch"
          id="material-switch"
        />
        <span className='toggle-label'>{label}</span>
      </label>
    </div>

  );
};
