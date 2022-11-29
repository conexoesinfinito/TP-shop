import React from 'react'
import { Link } from 'gatsby'
import {Container, Row, Col} from 'react-bootstrap'
import {ImLocation, ImPhone, ImEnvelop} from 'react-icons/im'
import './style.css'

const Contact = () => {
  return (
    <div className='contact'>
        <Container>
            <Row>
            <Col lg={4} className="left-side" >
                    <div className='address details'>
                    <i><ImLocation/></i>
                    <div className="topic">Endereço</div>
                    <div className="text-one">Nome da rua</div>
                    <div className="text-two">Bairro Cidade</div>
                    </div>
                    <div className='address details'>
                    <i><ImPhone/></i>
                    <div className="topic">Telefone</div>
                    <div className="text-one">+244 999999999</div>
                    <div className="text-two">+244 988888888</div>
                    </div>
                    <div className='address details'>
                    <i><ImEnvelop/></i>
                    <div className="topic">Email</div>
                    <div className="text-one">shop@gmail.com</div>
                    <div className="text-two">shop.sale@gmail.com</div>
                    </div>
                </Col>
                <Col lg={8} className="right-side" >
                    <div className="topic-text">Envie sua mensagem</div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam.
                    </p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text"  placeholder='Digite seu nome' required/>
                        </div>
                        <div className="input-box">
                            <input type="email"  placeholder='Digite seu email' required/>
                        </div>
                        <div className="input-box message-box" required>
                            <textarea  placeholder='Digite sua mensagem'/>
                        </div>
                        <div className="butto">
                            <input type="button"  value='Enviar' />
                        </div>
                    <div className='bt-voltar'>
                <Link to='/'>voltar</Link>
                </div>
                    </form>
                    </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Contact
