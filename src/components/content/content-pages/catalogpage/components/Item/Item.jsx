import Button from '../../../../../../common/button'
import s from './Item.module.css'
import { NavLink } from 'react-router-dom'

const Item = ({ title, photo, text, price, link }) => {
  return (
    <div className={s.card}>
      <span>
        <h4>{title}</h4>
        <img src={photo} alt="apperance" className={s.cardImg} width="100%" />
        <h3 className={s.name}>{title}</h3>
        <h3 className={s.desc}>{text}</h3>
      </span>
      <div className={s.footer}>
        <div>
          <h4>
            <b>Price :</b>
          </h4>
          <span>{price}$</span>
        </div>
        <NavLink to={`/catalog/${link}`}>
          <Button text="View more" className={s.btn} />
        </NavLink>
      </div>
    </div>
  )
}

export default Item
