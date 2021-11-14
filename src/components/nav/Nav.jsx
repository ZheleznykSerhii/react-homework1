import React from 'react'
import Logo from '../../img/logo.png'
import s from './nav.module.css'
// import reactDom from 'react-dom'
import ButtonNotSelected from './navButtons/buttonNotSelected'
import ButtonSelected from './navButtons/buttonSelected'

const Nav = (props) => {
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
      {props.children}
    </nav>
  )
}

export default Nav
