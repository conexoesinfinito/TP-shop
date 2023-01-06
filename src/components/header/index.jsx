import React,{useState} from 'react'
import Card from '../../components/card'
import { Link } from "gatsby";
import {AiOutlineSearch, AiFillShopping} from 'react-icons/ai'
import { Dropdown, Container, Row, Col} from 'react-bootstrap'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Data from '../data';
import './style.css'


const Header = () => {
  const [value, setValue] = useState('');
  const onChange =(event) =>{
    setValue(event.target.value);
  }
  const onSearch=(searchTerm)=>{
    setValue(searchTerm);
  }
  return (
    <>
       <div className='header'>
       <Container>
            <Row>
              <Col lg={2} className='flex'>
                <div><Link to='/' className='logo'>SHOP-GO</Link></div>
              </Col>
              <Col lg={7}>
                
              <form className='pesquisa'>
                <input type="search" id='texto' value={value} onChange={onChange}/>
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
              <Col lg={1}>
                <a href="" className='icon-shop'><i><AiFillShopping/></i></a>
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
              <Link to="/Game">GAME</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"><Link to="#">PROMOÇÕES</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="#">SERVIÇOS</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact">CONTACTO</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="dropdowns">
      {Data.game.filter(item =>{
        const searchTerm = value.toLowerCase();
        const titleName =item.title.toLowerCase();
        return searchTerm && titleName.startsWith(searchTerm) && titleName !== searchTerm; 
      })
      .slice(0,10)
      .map((item) => (<div onClick={()=>onSearch(item.title)}className='dropdowns-row' key={item.title}>
      <Card
                  imagem={item.imagem}
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  />
        </div>))}
      
    </div>
    </>
  )
}

export default Header