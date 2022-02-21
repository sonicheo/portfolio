import React from 'react'
import Home from './home/Home'
import AboutMe from './aboutMe/AboutMe'
import Technology from './technologies/Technology'
import Portfolio from './portfolio/Portfolio'
import ContactMe from './contactMe/ContactMe'

function Main() {
  return (
    <div>
        <Home/>
        <AboutMe/>
        <Technology/>
        <Portfolio/>
        <ContactMe/>
    </div>
  )
}

export default Main