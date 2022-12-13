import React from 'react'
import Layout from '../../components/layout'
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'
import { Container,Row } from 'react-bootstrap'
import './style.css'
import PageReader from "../../components/pageReader"
import house from '../../dummydate/house'
import img from '../../assets/house.jpg'

const House = () => {
  return (
    <Layout>
       <PageReader
      image={img}
      />
       <div className='house'>
        <Container>
            <Row>
                {house.map((item) => (

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

export default House