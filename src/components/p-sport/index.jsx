import React from 'react'
import './style.css'
import { StaticImage } from "gatsby-plugin-image"
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Container, Row, Button } from 'react-bootstrap'
import sports from '../../dummydate/sports'


const Psport = () => {
  return (
    <div className='p-sport' id='sport'>
        <Container>
                <h2>Sports</h2>
            <Row>
              <div className="card-sport">
                {sports.map((item,index) =>
                index < 4 &&  (

            <div className='card'>
          <div className='imagem'>
          <img src={item.imagem} alt="computador"/>
          </div>
        <div className='info'>
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
                <div className="img-sport">
                <StaticImage src='../../assets/sport01.jpg' alt='' placeholder="blurred"/>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Psport