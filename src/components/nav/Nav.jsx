import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/logo.png'
import s from './nav.module.css'

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <img className={s.navImg} src={Logo} alt="logo" />
      </div>
      <ul className={s.navLinks}>
        <NavLink to="/home">
          <li className={`${s.navItems} `}>Home</li>
        </NavLink>
        <NavLink to="/catalog">
          <li className={`${s.navItems} `}>Catalog</li>
        </NavLink>
        <NavLink to="/cart">
          <li className={`${s.navItems} `}>Cart</li>
        </NavLink>
      </ul>
      {props.children}
    </nav>
  )
}

export default Nav
