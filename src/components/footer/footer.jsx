import React from 'react'
import Logo from '../../img/logo.png'
import Fb from '../../img/fbfb.png'
import In from '../../img/inin.png'
import Twitter from '../../img/tw.png'
import G from '../../img/gg.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="top-part-footer">
        <div className="left-part-footer card">
          <div className="left-part-footer-title">Branding stuff</div>
          <div className="left-part-footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <div className="footer-logo ">
          <img src={Logo} alt="logo" className="FooterIMG"></img>
        </div>
        <div className="footer-icons ">
          <div>
            <img src={Fb} alt="icon"></img>
          </div>
          <div>
            <img src={In} alt="icon"></img>
          </div>
          <div>
            <img src={Twitter} alt="icon"></img>
          </div>
          <div>
            <img src={G} alt="icon"></img>
          </div>
        </div>
      </div>
      <div id="footer-downpart">
        <div className="clear"></div>
        <div id="rights">2020 IoT © Copyright all rights reserved</div>
        <div className="clear"></div>
      </div>
    </footer>
  )
}

export default Footer
