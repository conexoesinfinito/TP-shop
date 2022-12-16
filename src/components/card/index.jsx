import React, { useState } from 'react'
import './style.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Button, Modal } from 'react-bootstrap'

const Card = (props) => {
  const [show, setShow] = useState(false);
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
        </div>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
        
        
    </>
  )
}

export default Card
