import React from 'react'
import s from './header.module.css'

const Header = ({ text }) => {
  return (
    <header className={s.AppHeader}>
      <div className={s.pagesName}>{text}</div>
    </header>
  )
}

export default Header
