import React from 'react'
import ReactTyped from 'react-typed'
import style from './header.module.css'

function Header() {
  return (
    <div className={style.container} >
        <h1>What Am I?</h1>
        <ReactTyped
            strings={[
                " ",
                "A Software Engineer",
                "A Front-End Developer",
                "A Back-End Developer",
                "A Full-Stack Developer",
                "Or",
                "Simply",
                "A Coder"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
        />
    </div>
  )
}

export default Header