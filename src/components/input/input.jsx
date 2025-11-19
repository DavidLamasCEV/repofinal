import React from 'react'
import './Input.css'

const Input = ({ type = 'text', onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input
