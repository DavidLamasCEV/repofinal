import React from "react";
import './Button.css';


const Button = ({type, onClick, children }) => {
  return (
    <button
      type="Button"
      className={`btn-${type}`}
      onClick={() => console.log('Botón clickeado')}>
        {children}
    </button>
  )
}

export default Button;