import React from 'react'
import './Button.css'

const Button = ({ type, htmlType = "button", onClick, children }) => {
  return (
    <button
      type={htmlType}
      className={`btn-${type} font-shantell-bold`}
      onClick={(event) => {
        console.log("Click en Button:", { type, htmlType });
        if (onClick) onClick(event);
      }}
    >
      {children}
    </button>
  )
}


export default Button
