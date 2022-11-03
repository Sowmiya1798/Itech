import React from 'react'
import { useState } from "react";
import './Home.css'


export const Input = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
      };

  return (
    <div>
        
        <div className='spacing'>
        {/* <label>{label} : &nbsp;</label> */}
      <input className='inputbox'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
      </div>

    </div>
  )
}
