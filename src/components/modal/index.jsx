import React from 'react'
import { Row } from 'react-bootstrap'
import './style.css'

const Modal = (props,{show}) => {
    if(!show){
        return null
    }
  return (
    <div className='pop-up-container'>
        <div className='pop-up-body'>
            <div className='pop-up-header'>
                <button>x</button>
            </div>
            <Row>
                <div className='pop-img'>
                    <img src={props.imagem} alt=""/>
                </div>
                <div className='pop-conteudo'>
                    <h5>{props.title}</h5>
                    <span>{props.price}</span>
                    <div className='ct'>
                    <input type="number" value='1'/>
                    <button>ADD TO CART</button>
                    </div>
                    <h5>Detalhes do Produto</h5>
                    <p>{props.description}
                    </p>
                </div>
            </Row>
            </div>
        </div>
  )
}

export default Modal