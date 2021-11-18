import Button from '../../../../../../common/button'
import Select from '../Select/Select'
import bar from './FiltersBar.module.css'
import React from 'react'

let priceRef = React.createRef()

let dataChange = () => {
  let data = priceRef.current.value
  console.log(data)
}
const FiltersBar = ({ artState }) => {
  return (
    <div className={bar.filtersBar}>
      <div className={bar.set}>
        <div>
          <select defaultValue={'Price'} ref={priceRef} onChange={dataChange}>
            <option disabled>Price</option>
            <option value="Item1">Item1</option>
            <option value="Item2">Item2</option>
            <option value="Item3">Item3</option>
            <option value="Item4">Item4</option>
          </select>
        </div>
        <Select text=" 1" />
        <Select text=" 2" />
        <Select text=" 3" />
      </div>
      <div className={bar.btn}>
        <Button text="Apply" />
      </div>
    </div>
  )
}

export default FiltersBar
