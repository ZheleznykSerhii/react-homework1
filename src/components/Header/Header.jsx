import React from 'react'
import s from './header.module.css'
import circles from '../../img/circles.png'

const Header = ({ text }) => {
  return (
    <header className={s.AppHeader}>
      <div>
        <img className={s.circles} alt="cirlces" src={circles}></img>
      </div>
      <div className={s.pagesName}>{text}</div>
    </header>
  )
}

export default Header
