import React from 'react'
import './style.css'
import { StaticImage } from "gatsby-plugin-image"
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'
import { Container, Row, Button } from 'react-bootstrap'
import sports from '../../dummydate/sports'

const Psport = () => {
  return (
    <div className='p-sport' id='sport'>
        <Container>
            <Row>
                <h2>Sports</h2>
                {sports.map((item,index) =>
                index < 4 &&  (

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
            </Row>
        </Container>
    </div>
  )
}

export default Psport