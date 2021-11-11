import React from 'react'

const ArtMain = ({ photo, title, text }) => {
  return (
    <div className="card">
      <div>
        <img src={photo} alt="card" className="card-img"></img>
        <h6>{title}</h6>
        <div className="cardText">{text}</div>
      </div>
    </div>
  )
}

export default ArtMain
