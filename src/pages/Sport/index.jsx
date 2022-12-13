import React from 'react'
import Layout from '../../components/Layout'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { Container,Row, Button } from 'react-bootstrap'
import sports from '../../dummydate/sports'
import image from '../../assets/sport.jpg'
import PageReader from '../../components/pageReader'
import './style.css'

const Sport = () => {
  return (
    <Layout>
      <PageReader
      image={image}
      />
        <div className='sports'>
        <Container>
            <Row>
                {sports.map((item) => (

            <div className='card'>
          <div className='imagem'>
          <img src={item.imagem} alt="imagem"/>
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
    </Layout>
  )
}

export default Sport