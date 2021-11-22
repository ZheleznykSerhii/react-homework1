import axios from 'axios'
import { useEffect, useState } from 'react'
import Preloader from '../../../../../../../common/preloader'

const Test = () => {
  const [data, setData] = useState([])

  const instance = axios.create({
    baseURL: 'http://localhost:9000/cakes/',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  useEffect(() => {
    const getData = async () => {
      const data = await instance.get()
      setData(data)
      console.log(data)
    }
    getData()
  }, [data])
  console.log(data)
  return !data ? (
    <div>
      <Preloader />
    </div>
  ) : (
    <div>{data}</div>
  )
}

export default Test
