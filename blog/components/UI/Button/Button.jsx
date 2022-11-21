import React from 'react'
import css from "./Button.module.css"
import {clx} from "../../../utils/clx"

export const Button = ({children, className,  ...props}) => {
  return (
    <button className={clx(css.button, className)} {...props}>{children}</button>
  )
}
