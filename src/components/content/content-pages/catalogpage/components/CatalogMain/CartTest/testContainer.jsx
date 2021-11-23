import axios from 'axios'
import { useEffect, useState } from 'react'
import Preloader from '../../../../../../../common/preloader'
import Test from './test'

const TestContainer = () => {
  const [local, setLocal] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3005/api')
      .then((response) => response.json())
      .then((response) => setLocal(response.text))
  }, [])

  console.log(local)
  return <Test local={local} />
}

export default TestContainer
