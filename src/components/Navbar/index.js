// import React from "react";
import React, { useState } from 'react';
import "./style.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
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
            LOGIN
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
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        PRODUTOS
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Camisas</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Calças</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tenis</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Tenis</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Tenis</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Tenis</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Link to="/produtos/produtos">PROMOÇÕES</Link>
      <Link to="/produtos/produtos">NOVIDADES</Link>
      <Link to="/produtos/produtos">CRIAR CONTA</Link>
      <Link to="/produtos/produtos">INICIAR SESSÃO</Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
