import React from 'react'

import s from '../nav.module.css'

const ButtonNotSelected = (props) => {
  return <li className={s.navItems}>{props.text}</li>
}

export default ButtonNotSelected
