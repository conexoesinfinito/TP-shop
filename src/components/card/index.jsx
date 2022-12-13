import React from 'react'
import './style.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Button } from 'react-bootstrap'

const Card = (props) => {
  return (
    <>
      <div className='card'>
          <div className='imagem'>
          <img src={props.imagem} alt="computador"/>
          </div>
        <div className='info'>
            <h3 className='title'>{props.title}</h3>
            <div className='sub-info'>
              <div className='preco'>{props.newPrice} <span>{props.oldPrice}</span></div>
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
    </>
  )
}

export default Card
