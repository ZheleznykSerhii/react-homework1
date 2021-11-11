import React from 'react'
import Logo from '../../img/logo.png'
import s from './nav.module.css'
import ButtonNotSelected from './navButtons/buttonNotSelected'
import ButtonSelected from './navButtons/buttonSelected'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <img className={s.navImg} src={Logo} alt="logo" />
      </div>
      <ul className={s.navLinks}>
        <ButtonSelected text="Home" />
        <ButtonNotSelected text="Catalog" />
        <ButtonNotSelected text="Cart" />
      </ul>
    </nav>
  )
}

export default Nav
