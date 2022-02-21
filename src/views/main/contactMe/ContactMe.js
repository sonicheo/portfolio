import React from 'react'
import style from './contactMe.module.css'
import { navigationLinks } from '../../../helpers/navigationLinks'

function ContactMe() {

    function createLinks(){
        return navigationLinks.map((item, id) =>(
            <p key={id}><a href={item.ref}> {item.name} </a></p>
        ))
    }

  return (
    <div id="contact" className={style.container} >
        <div className={style.contact_me_data} >
            <div >
                <p>Bay Point, California</p>
                <p>Juan Gomez</p>
                <p>juan.a.gomez.villanueva@gmail.com</p>
            </div>
            <div>
                {createLinks()}
            </div>
        </div>
        <div className={style.copyright} >
            <p>Copyright&copy; {new Date().getFullYear()} </p>
        </div>
    </div>
  )
}

export default ContactMe