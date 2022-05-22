import React from 'react'
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import FrontBox from './FrontBox'
import '../FrontPage/FrontBox.css'
import TypeWriterEffect from 'react-typewriter-effect'
import Typewriter from 'react-typewriter-effect'

import Gallary from './Gallary'
import { Link, Router } from 'react-router-dom'

function FrontPage() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>
            <Link to='/' style={{ textDecoration: 'none', color: 'grey' }}>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Red Hat Display',
                  color: '#3F3D56',
                  fontWeight: 500,
                  fontSize: '1.5em',
                }}
                startDelay={2000}
                cursorColor='#3F3D56'
                multiText={['Expert System', 'Arooj Latief']}
                multiTextDelay={1000}
                typeSpeed={30}
                loop={true}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>
                <Link to='/' style={{ textDecoration: 'none', color: 'grey' }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href='#link'>
                <Link
                  to='/Gallary'
                  style={{ textDecoration: 'none', color: 'grey' }}
                >
                  Gallary
                </Link>
              </Nav.Link>
              <NavDropdown title='Information' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  <Link
                    to='/Contact'
                    style={{ textDecoration: 'none', color: 'grey' }}
                  >
                    Contact ☎️
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Email 📧</NavDropdown.Item>
                {/* <NavDropdown.Item href='#action/3.3'>
                  Instagram
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default FrontPage
