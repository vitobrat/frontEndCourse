import React from 'react'
import css from './text.module.css'

export const Text = ({className,children}) => {
  return (
    className == "textRed"?
    <div className={css.text}><p><text type='text' className={css.textRed}>{children}</text></p></div>:
    <div className={css.text}><p><text type='text' className={css.textGreen}>{children}</text></p></div>
)}


