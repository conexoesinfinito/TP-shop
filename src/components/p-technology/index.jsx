import React from 'react'
import './style.css'
import { StaticImage } from "gatsby-plugin-image"
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Container, Row, Button, Col } from 'react-bootstrap'
import techno from '../../dummydate/techno'



const Tecnologia = () => {
  return (

    <div className='tecnologia ' id='tecnologia'>
    <Container>
            <h2>Tecnologia</h2>
        <Row>
          <div className="img-tech">
          <StaticImage src='../../assets/tech01.jpg' alt='' placeholder="blurred"/>
            </div>
            <div className="card-tech">
            {techno.map((item, index) =>
            index < 4 && (
              <div className='card'>
                <div className='imagem'>
                  <img src={item.imagem} alt="computador"/>
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
                  <Button variant="danger">Saber mais...</Button>{' '}
                </div>
              </div> 
            ))}
            </div>
        </Row>
    </Container>
</div>
  )
}

export default Tecnologia