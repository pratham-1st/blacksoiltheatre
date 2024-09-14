import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
          <div className="nav-container">
            <div className="nav-left">
                  <img className="nav-logo" src="https://i.postimg.cc/v82R4TZn/logo.png" alt=""/>
                  <h2 className="nav-logo-text">BLACK SOIL<br />THEATRE.</h2>
            </div>
      
            <div className="nav-right">
                <a href="team.html"> <h4 className="text-white text-[1.4vh] md:text-[1.5vw] font-bold">GALLERY</h4></a>
                <a href="#"><h4 className="text-white text-[1.4vh] md:text-[1.5vw] font-bold">MEMBERS</h4></a>
                <a href="#"><h4 className="text-white text-[1.4vh] md:text-[1.5vw] font-bold">ABOUT US</h4> </a>
            </div>       
          </div>
  )
}

export default Navbar