import React, { useState } from 'react'
import Heading from '../../../img/heading.PNG'
import Button from '../../../common/button'
import ArtMain from './homepageComponents/ArtMain'
import HeaderPart from './HeaderPart'

let HomePageContent = ({ artState }) => {
  const [numberOfItems, setNewItems] = useState(3)

  const getNewItems = () => {
    setNewItems((value) => value + 3)
  }

  const defaultValueOfItems = () => {
    setNewItems((value) => (value = 3))
  }

  return (
    <div className="content-main">
      <HeaderPart heading={Heading} />
      <div className="bottom-part">
        <ArtMain artState={artState} numberOfItems={numberOfItems} />
      </div>
      <div className="aboveBtn">
        <div></div>
        <Button
          text={numberOfItems < artState.length ? 'View more' : 'View less'}
          onClick={
            numberOfItems < artState.length ? getNewItems : defaultValueOfItems
          }
        />
        <div></div>
      </div>
    </div>
  )
}

export default HomePageContent
