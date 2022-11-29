import React from 'react'
import css from "./Cards.module.css"
import Link from 'next/link'

export const Card = ({title, img, id, tags}) => {
  return (
    <div className={css.cards}>
      {img && (
      <div className={css.cards__img}>
        <img fill src={img}/>
      </div>
      )}
      <div className={css.cards__content}>
        <div className={css.cards__about}>
          {tags.map(tag => (
            <span>{tag}</span>
          ))} 
        </div>
        <Link href={`/blog/${id}`} className={css.cards__description}>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  )
}
