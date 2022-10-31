import React from 'react'
import css from './text.module.css'

export const Text = ({className,children}) => {
  return (
    <div className={css.text}><p className={className == "textRed" ? css.textRed : css.textGreen}>{children}</p></div>
)}


