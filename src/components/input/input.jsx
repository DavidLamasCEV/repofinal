import React from "react";
import './Input.css';

const Input = ({type, onChange, placeholder}) => {
    return(
        <input 
            type="text" 
            onChange={onChange}
            placeholder={placeholder}
            className={``}
        />
    )
}

export default Input;