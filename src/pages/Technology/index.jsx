import React, { useState } from 'react'
import './style.css'
import Layout from '../../components/layout'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Container,Row, Button } from 'react-bootstrap'
import techno from '../../dummydate/techno'
import Modal from 'react-bootstrap/Modal';


const Technology = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
        <div className='technology'>
        <Container>
            <Row>
            {techno.map((item) => (
              <>
              <div className='card'>
                <div className='imagem'>
              <img src={item.imagem} alt="imagem"/>
                </div>
              <div className='info' key={item.id}>
              <h3 className='title'>{item.title}</h3>
              <div className='sub-info'>
                <div className='preco'>{item.newPrice} <span>{item.oldPrice}</span></div>
                <div className='stars'>
                  <i className='Ai'><AiFillStar/></i>
                  <i className='Ai'><AiFillStar/></i>
                  <i className='Ai'><AiFillStar/></i>
                  <i className='Ai'><AiFillStar/></i>
                  <i><AiOutlineStar/></i>
                </div>
              </div>
            </div>
            <div className='overlay'>
              <Button variant="danger" onClick={handleShow}>Saber mais...</Button>{' '}
                  </div>
          </div> 
          
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>
            {item.title}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="md">
              <div className="cont-img">
              <img src={item.imagem} alt="imagem"/>
              </div>
              <div className="cont-inf">
              {item.newPrice}
              {item.oldPrice}
              </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            {item.description}
            </Modal.Footer>
        </Modal>
        </> ))}
                </Row>
        </Container>
        </div>

    </Layout>
  )
}

export default Technology