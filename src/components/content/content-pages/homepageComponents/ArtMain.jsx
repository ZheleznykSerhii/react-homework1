import React from 'react'
import ArtITem from './ArtItem'

const ArtMain = ({ artState }) => {
  console.log(artState)
  return (
    <div className="artMain">
      {artState.map((items) => (
        <ArtITem key={items.id} {...items} />
      ))}
    </div>
  )
}

export default ArtMain
