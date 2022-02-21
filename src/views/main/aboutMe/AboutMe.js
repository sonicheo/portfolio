import React from 'react'
import style from './aboutMe.module.css'
import juanImage from '../../../images/Juan.png'


function AboutMe() {
  return (
    <div className={style.container} id="about_me" >
        <div  >
          <img src={juanImage} alt="Juan" />
        </div>
        <div className={style.textContainer} >
            <h1>ABOUT ME</h1>
            <p> My coding experience comes from an apprenticeship opportunity that started with a 14-week coding bootcamp(Coding Dojo), where I learned a plethora of different languages and tools including, Python, Java, Javascript, Spring, and React. The second part of the apprenticeship was through Slate Impact where I developed a web platform for a client using React and NodeJS. Through the apprenticeship I gained a deep familiarity with AWS, CI/CD principles and practice, TravisCI, Docker, Postgres, and various APIs.</p>
        </div>
    </div>
  )
}

export default AboutMe