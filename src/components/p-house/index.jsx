import React from 'react'
import './style.css'
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'
import { Container, Row } from 'react-bootstrap'
import house from '../../dummydate/house'

const Phouse = () => {
  return (


<div className='p-house' id='house'>
        <Container>
            <Row>
                <h2>House</h2>
                {house.map((item,index) => 
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
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div> 
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Phouse
