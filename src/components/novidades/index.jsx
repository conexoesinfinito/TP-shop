import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Col, Container,Row } from 'react-bootstrap'
import './style.css'
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'
import novidades from '../../dummydate/novidades'

const Novidades = () => {
    const breakPoints=[
        {width:500, itemsToShow:1},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:5},
        {width:1500, itemsToShow:5}
    ];
  return (
    <div className='novidades' id='novidades'>
    <Container>
        <h2>Novidades</h2>
        <Row>
        <Col lg={12}>
        <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
        {novidades.map((item) => (

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
      </Carousel>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Novidades
