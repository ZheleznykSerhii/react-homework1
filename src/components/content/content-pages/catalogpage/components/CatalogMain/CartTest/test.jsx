import axios from 'axios'
import { useEffect, useState } from 'react'
import Preloader from '../../../../../../../common/preloader'

const Test = ({ local }) => {
  return (
    <div>
      {local ? (
        <div>
          <div>{local} </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  )
}

export default Test
