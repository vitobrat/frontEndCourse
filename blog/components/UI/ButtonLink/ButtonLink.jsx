import Link from 'next/link'
import React from 'react'
import css from './ButtonList.module.css'
import {clx} from '../../../utils/clx';

export const ButtonLink = ({children, className, ...props}) => {
  return (
    <Link className={clx(css.link, className)} {...props}>{children}</Link>
  )
}
