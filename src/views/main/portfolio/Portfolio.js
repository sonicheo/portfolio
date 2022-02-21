import React, { useState } from 'react'
import style from './portfolio.module.css'
import { portfolioData } from '../../../helpers/portfolioData'
import { Button, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import DevIcon from 'devicon-react-svg'
import './portfolio_modal.css'


function Portfolio() {

    const [popUp, setPopUp] = useState(false);
    const [tempData, setTempData] = useState({});

    function creatModal(data){
        return(
            <Modal
                show={popUp}
                onHide={() => setPopUp(false)}
                size='lg'
                arial-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header>
                    <Modal.Title>
                        <h1>{data.title}</h1>
                    </Modal.Title>
                    <Button  onClick={() => setPopUp(false)} >Close</Button>
                </Modal.Header>
                <Modal.Body>
                    <p> {data.desc}</p>
                    <Image src={data.image}/>
                </Modal.Body>
                <Modal.Footer>
                    <a style={{marginRight: "auto"}} href={data.link}>{data.link ? "Visit Site": "In Progress " }</a>
                    <p>Technologies used: {data.tools}</p>
                </Modal.Footer>
            </Modal>
        )
    }
    
    function cards(){
        return portfolioData.map((item, id) =>{
            return(
                <Card className={style.card}  key={id} >
                    <Image
                        onClick={()=>{
                            setTempData({
                                image: item.image,
                                link: item.link,
                                title: item.title,
                                desc: item.description,
                                tools: item.tools
                            })
                            setPopUp(true);
                        }}
                        src={item.image}
                    />
                    <div style={{display: "none"}} className={style.click_info} >&#x1F50E;&#xFE0E;</div>
                    {creatModal(tempData)}
                </Card>
            )
        })
    }
    

    return (
        <div id='portfolio' className={style.container} >
            <div className={style.header_container} >
                <h1>Portfolio</h1>
                <p>Link to my Github: 
                    <a href="https://github.com/sonicheo" target='_blank' rel='noreferer'>
                        <DevIcon className={style.github_icon}  icon="github" />
                    </a>
                </p>
                
            </div>
            <Container className={style.bootstrap_container} fluid='lg'>
                <Row className={style.bootstrap_row} >
                    {cards()}
                </Row>
            </Container>
        </div>
  )
}

export default Portfolio