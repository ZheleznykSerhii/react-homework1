import s from './ItemPage.module.css'
import y from '../components/Select/Select.module.css'
import Button from '../../../../../common/button'
import { useParams } from 'react-router'

import { NavLink } from 'react-router-dom'

const ItemPage = ({ artState }) => {
  const { link } = useParams()
  console.log(link)
  let cake = artState.find((item) => item.link === link)
  console.log(cake)
  if (!cake) {
    return <h2>Not Found!</h2>
  }

  return (
    <div id={s.itemPageWrapper}>
      <div id={s.contentItems}>
        {/* <div id={s.img}> */}
        <img src={cake.photo.slice(1)} width="30%" />
        {/* </div> */}
        <div id={s.content}>
          <div className={s.characteristic}>
            <div id={s.char1}>Weight: {cake.weight} g</div>
            <div id={s.char2}>Diabetic: {cake.diabetic}</div>
          </div>
          <h2>{cake.title}</h2>
          <div id={s.text}>{cake.text}</div>
          <div id={s.fields}>
            <div className={s.field}>
              <strong>Countable Field</strong>
              <input id={s.itemInput} type="text" name="countable field" />
            </div>
            <div className={s.field}>
              <strong>Selectable Field</strong>
              <select className={y.select}>
                <option disabled selected>
                  Select
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div id={s.empty}></div>
          </div>
        </div>
      </div>
      <div id={s.footer_items}>
        <div id={s.price}>
          <strong>Price: {cake.price}</strong>
        </div>
        <div id={s.btns}>
          <NavLink to="/catalog">
            <Button text="Go back" />
          </NavLink>
          <Button text="Add to cart" />
        </div>
      </div>
    </div>
  )
}
export default ItemPage
