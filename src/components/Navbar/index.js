// import React from "react";
import React, { useState } from 'react';
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "gatsby";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="itens">
            <div className="logo">SHOP</div>
            <div className="search-box">
          <input
            className="search-text"
            type="text"
            name=""
            placeholder="Tipo de pesquisa"
          />
          {/* <a className="search-btn" href="#">
            <i>
              <HiOutlineSearchCircle />
            </i>
          </a> */}
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            LOGIN / REGISTER
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action-1">Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2" >Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </div>
        </div>
      </div>  
      <div className='menu'>
        <div className='container'>
          <div className='links'>
          <Link to="/">HOME</Link>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        PRODUTOS
      </Dropdown.Toggle>
      <Dropdown.Menu id='drop-card'>
        <Dropdown.Item><Link to="#produtos">COMPUTADORES</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">MONITORES</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">MOUSE</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">SOFÁS</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">SKATES</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">SMARTPHONES</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">PLAYSTATION</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">VIDEOS-JOGOS</Link></Dropdown.Item>
        <Dropdown.Item><Link to="#">OUTROS</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Link to="#">PROMOÇÕES</Link>
      <Link to="#">NOVIDADES</Link>
      <Link to="#">LOJAS</Link>
      <Link to="#">CONTACT</Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
