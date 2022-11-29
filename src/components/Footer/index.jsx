import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './style.css'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
        <Col lg={3}>
          <h6>COLEÇÕES</h6>
          <Link to="#">Technology</Link>
          <Link to="#">Technology</Link>
          <Link to="#">Technology</Link>
          </Col>
        <Col lg={3}>
          <h6>PRODUTOS</h6>
          <Link to="#novidades">Novidades</Link>
          <Link to="#">Technology</Link>
          <Link to="#">Technology</Link>
          </Col>
        <Col lg={3}>
         <h6>RECEBA NOVIDADES</h6>
         <Link to="#">Technology</Link>
          </Col>
        </Row>
      </Container>
    
    
    </div>
  )
}

export default Footer