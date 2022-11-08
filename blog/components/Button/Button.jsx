import React from 'react'
import css from './button.module.css'

export const Button = ({children, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className={css.button}>{children}</button>
  )
}