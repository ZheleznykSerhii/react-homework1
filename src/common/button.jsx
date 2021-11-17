import React from 'react'
import s from './button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
