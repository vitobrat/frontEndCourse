import React from 'react'

export const List = ({content}) => {
  return (
    <ul>{content.map((el, i) =>(
      console.log(el.url+" "+el.title),
      <li key={i}><img src={el.url}></img><p>{el.title}</p></li>
    ))}</ul>
  )
}