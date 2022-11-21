import React from 'react'
import {ButtonLink} from '../../UI/ButtonLink/ButtonLink'
import css from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={css.nav}>
      <img className={css.img__logo} src="icon.png"/>
      <ul className={css.nav__list}>
      <li><ButtonLink href="/sign-in">Вход</ButtonLink></li>
        <li><ButtonLink href="/profile">Профиль</ButtonLink></li>
        <li><ButtonLink href="/contacts">Контакты</ButtonLink></li>
        <li><ButtonLink href="/about">О нас</ButtonLink></li>
        
      </ul>
    </nav>
  )
}

