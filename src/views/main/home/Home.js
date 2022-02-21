import React from 'react'
import Header from '../../../components/header/Header'
import NavigationBar from '../../../components/navigationBar/NavigationBar'
import HomeParticles from '../../../components/reactParticals/HomeParticles'
import style from './home.module.css'

const Home = () => {
  return (
    <div id="home" className={style.container} >
        <NavigationBar/>
        <HomeParticles/>
        <Header/>
    </div>
  )
}

export default Home