import React from 'react'
import css from "./Cards.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({title, img, date, author, description, id}) => {
  return (
    <div className={css.cards}>
      <div className={css.cards__img}>
        <img fill src={img}/>
      </div>
      <div className={css.cards__content}>
        <div className={css.cards__about}>
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <Link href={`/blog/${id}`} className={css.cards__description}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  )
}
