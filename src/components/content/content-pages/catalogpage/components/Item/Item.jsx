import Button from '../../../../../../common/button'
import s from './Item.module.css'

const Item = ({ title, photo, text, price }) => {
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
        <Button text="View more" className={s.btn} />
      </div>
    </div>
  )
}

export default Item
