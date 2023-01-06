import React, { useState } from 'react'
import './style.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Button} from 'react-bootstrap'
import Modal from '../modal'

const Card = (props) => {
  const [show,setShow] = useState(false);

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
                  <Button variant="danger" onClick={() => setShow(true)}>Saber mais</Button>{' '}
                </div>
                <Modal show={show}/>
        </div>
        
        
    </>
  )
}

export default Card
