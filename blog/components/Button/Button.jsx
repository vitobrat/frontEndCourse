import React from 'react'
import css from './button.module.css'

export const Button = ({children}) => {
  return (
    <button type='button' className={css.button}>{children}</button>
  )
}


