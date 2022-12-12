import React,{useState} from 'react'
import './style.css'
import { Link } from "gatsby";
import {AiOutlineSearch} from 'react-icons/ai'
import { Dropdown, Container, Row, Col} from 'react-bootstrap'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <>
       <div className='header'>
       <Container>
            <Row>
              <Col lg={2}>
                <div><Link to='/' className='logo'>SHOP-GO</Link></div>
              </Col>
              <Col lg={8}>
                
              <form className='pesquisa'>
                <input type="search" id='texto'/>
                <button className='btn-search'><AiOutlineSearch/></button>
              </form>

              </Col>
              <Col lg={2}>
              <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                LOGIN / REGISTER
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><Link to='/Login'>Login</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/Register'>Register</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
          </Row>
        </Container>
       </div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PRODUTOS" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/Technology'>TECHNOLOGY</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/House">HOUSE</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/Sport">SPORTS</Link></NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="#">GAME</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><Link to="#">PROMOÇÕES</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#">SERVIÇOS</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact">CONTACTO</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header