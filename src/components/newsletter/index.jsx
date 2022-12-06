import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <Container>
        <Row>
            <Col lg={6} className="newstext">
                <h4>Sign Up For Newslatter</h4>
                <p>Get Email updates about  our latest shop and <span>especial offers.</span></p>
            </Col>
            <Col lg={6} className="form">
                <input type='text' placeholder='Digite o seu Email'/>
                <button className='btn-letter'>Sign Up</button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Newsletter
