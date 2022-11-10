// import React from "react";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import "./style.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "gatsby";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="menu-top">
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            name=""
            placeholder="Tipo de pesquisa"
          />
          <a className="search-btn" href="#">
            <i>
              <HiOutlineSearchCircle />
            </i>
          </a>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <i>
              <AiOutlineUser />
            </i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action-1" onClick={() => setShow(true)}>Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2" >Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="header">
        <div className="container">
          <div className="menu">
            <div className="logo">SHOP</div>
            <div className="links">
            <Link to="/">HOME</Link>
              <Link to="/sobre/sobre">SOBRE</Link>
              <Link to="/produtos/produtos">PRODUTOS</Link>
              <Link to="#">CONTACTO</Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
