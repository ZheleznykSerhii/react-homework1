import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../../../../../../common/button'
import Preloader from '../../../../../../../common/preloader'
import TestContainer from './testContainer'

let Cart = () => {
  let priceRef = React.createRef()

  let selectDataChange = () => {
    let data = priceRef.current.value
    return data
  }

  let handleBtn = (e) => {
    setInputPrice(selectDataChange())
  }

  const [fetchData, setFetchData] = useState([])
  const [inputPrice, setInputPrice] = useState(1)
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
  })

  useEffect(() => {
    const getData = async () => {
      const data = await instance.get(`${inputPrice}`)
      setFetchData(data)
    }
    getData()
  }, [inputPrice])

  console.log('data', fetchData.data)
  return (
    <div>
      <div>
        <select defaultValue={'1'} onChange={selectDataChange} ref={priceRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        {fetchData.data ? (
          <div>
            <div>title: {fetchData.data.title}</div>
            <div>ID: {fetchData.data.id}</div>
          </div>
        ) : (
          <Preloader />
        )}
      </div>
      <Button text="Apply" onClick={handleBtn} />
      <TestContainer />
    </div>
  )
}
export default Cart
