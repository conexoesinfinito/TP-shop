import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './style.css'
import { Link } from 'gatsby'
import {AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
import googleplay from '../../assets/google-play.png'
import applestore from '../../assets/apple-store.png'


const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
        <Col lg={6} className='lg'>
          <h4>SHOP-GO</h4>
          <h6>Contact</h6>
          <div className="contac">
          <p><span> Endereço:</span>Nome da rua Bairro Cidade</p>
          <p><span> Telefone:</span>+244 999999999 / +244 988888888</p>
          <p><span> Email:</span>Shopgo@gmail.com</p>
          <p><span> Houras:</span>08:00-21:00</p>
          </div>

          <h6>Follow Us</h6>
          <div className="follow-links">
           <a href="#"><i><AiFillFacebook /></i></a>
           <a href="#"><i><AiFillInstagram /></i></a>
           <a href="#"><i><AiOutlineWhatsApp /></i></a>
          </div>
          </Col>
        <Col lg={2} className='lg'>
          <h4>LINKS</h4>
          <Link to="#novidades">Novidades</Link>
          <Link to="#tecnologia">Tecnologia</Link>
          <Link to="#sport">Sports</Link>
          <Link to="#house">Casa</Link>
          <Link to="#">Game</Link>

          </Col>
        <Col lg={2} className='lg'>
         <h4>BLOG</h4>
         <Link to="#">Technology</Link>
          </Col>
        <Col lg={2} className='lg'>
         <h4>INSTALL APP</h4>
         <h6>From App Store or Google Play</h6>
          <div className="app">
            <div className='google'>
              <a href="#">
            <img src={googleplay} alt=''/>
            </a>
            </div>
            <div className='apple'>
            <a href="#">
            <img src={applestore} alt=''/>
            </a>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
        <div className="footer-f">
          2022-Template Ecommerce
        </div>
    
    
    </div>
  )
}

export default Footer