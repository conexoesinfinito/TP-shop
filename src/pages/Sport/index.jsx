import React from 'react'
import Layout from '../../components/Layout'
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'
import { Container,Row } from 'react-bootstrap'
import './style.css'
import sports from '../../dummydate/sports'

const Sport = () => {
  return (
    <Layout>
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
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
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