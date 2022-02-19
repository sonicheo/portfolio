import React from 'react'
import './navigationBar.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { navigationLinks } from '../../helpers/navigationLinks'


function NavigationBar() {

    function createLinks(){
        return navigationLinks.map((item, id) =>(
            <Nav.Link  key={id} href={item.ref}> {item.name} </Nav.Link>
        ))
    }

  return (
    <div id='home' >
        <Navbar className='navigation_container'  expand='md' >
            <Navbar.Brand href='#home'>Juan Gomez</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse>
                <Nav className='links'  >
                    {createLinks()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationBar