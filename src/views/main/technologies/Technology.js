import React from 'react'
import style from './technology.module.css'
import DevIcon from 'devicon-react-svg'
import {tech} from '../../../helpers/tech'

function Technology() {

    function iconSpam(){
        return tech.map((item, id) =>{
            return (
                <div key={id} className={style.tech_card} > 
                    <DevIcon className={style.tech_icons} icon={item.iconName}/> 
                    <span>{item.name}</span>
                </div>
            )
        })
    }

  return (
    <div id="technologies" className={style.container} >
        <div className={style.header_container} >
            <h1>Technologies That I Use</h1>
        </div>
        <div className={style.tech_card_container} >
            {iconSpam()}
        </div>
    </div>
  )
}

export default Technology