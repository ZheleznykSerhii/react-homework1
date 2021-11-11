import React from 'react'

const HeaderPart = ({ heading }) => {
  return (
    <div className="header-part">
      <div className="img-content-main">
        <img src={heading} alt="logo" className="bannerImg"></img>
      </div>
      <div className="text-content-main">
        <h1>Cake bakery</h1>
        <div className="text-content">
          Our Bakery is a committed team of talented individuals who provide
          superior quality bakery, pastries and wedding cakes. Our goal is to
          provide all of our customers with an unparalleled product and
          experience. Our talented team of pastry chefs uses the purist of
          ingredients and cutting edge techniques to create a product that is
          truly superior in quality. We constantly provide outstanding customer
          service and believe that customer satisfaction is our ultimate goal.
          We are dedicated to provide our family of employees with a respectful
          and positive work environment where everyone is equal. We are always
          guided by out 11 points of culture everyday in everything we do.
        </div>
      </div>
    </div>
  )
}

export default HeaderPart
