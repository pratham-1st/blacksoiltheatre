import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Caraousel/Carousel'
import Marquee from './components/Marquee/Marquee'
import Subscribe from './components/Subscribe/Subscribe'
import About from './components/About/About'
import { Socials } from './components/Socials/Socials'
import Copyright from './components/Copyright/Copyright'

const App = () => {

  return (
    <div>
      <Navbar />
      <Carousel/>
      <Marquee />
      <Subscribe />
      <About />
      <Socials />
      <Copyright />
    </div>
  )
}

export default App