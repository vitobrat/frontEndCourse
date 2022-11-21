import React from 'react'
import Head  from 'next/head'

export const Layout = ({children, title}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    </>
  )
}