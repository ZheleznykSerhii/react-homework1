import React from 'react'
import ArtITem from './ArtItem'

const ArtMain = ({ artState, numberOfItems }) => {
  console.log(artState)
  return (
    <div className="artMain">
      {artState.slice(0, numberOfItems).map((items) => (
        <ArtITem key={items.id} {...items} />
      ))}
    </div>
  )
}

export default ArtMain
