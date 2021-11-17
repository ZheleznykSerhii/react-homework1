import Item from '../Item/Item'
import s from '../Item/Item.module.css'

const Items = ({ artState }) => {
  return (
    <div className={s.cardWrapper}>
      {artState.map((items) => (
        <Item key={items.id} {...items} />
      ))}
    </div>
  )
}

export default Items
