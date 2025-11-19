import React from 'react'
import './Button.css'

const Button = ({ type, onClick, children }) => {
  return (
    <button
      type="button"
      className={`btn-${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
