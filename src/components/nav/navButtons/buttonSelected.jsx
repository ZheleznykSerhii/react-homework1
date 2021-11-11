import React from 'react'

import s from '../nav.module.css'

const ButtonSelected = (props) => {
  return <li className={`${s.navItems} ${s.selected}`}>{props.text}</li>
}

export default ButtonSelected
