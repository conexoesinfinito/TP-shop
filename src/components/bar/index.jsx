import React from 'react'
import { Link } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const Bar = () => {
  return (
    <>
       <div className="bar">
        <Container>
            <Row>
                {/* <Col lg={2}>
                    <button className='it'>
                    <Link to="#tecnologia">Technology</Link>
                    </button>
                    </Col>
                <Col lg={2}>
                    <button className='it'>
                    <Link to="#sport">Sports</Link>
                    </button>
                    </Col>
                <Col lg={2}>
                    <button className='it'>
                    <Link to="#house">House</Link>
                    </button>
                    </Col>
                <Col lg={2}>
                    <button className='it'>
                    <Link to="#">Game</Link>
                    </button>
                    </Col> */}
                    
            </Row>
        </Container>
       </div>
    </>
  )
}

export default Bar
