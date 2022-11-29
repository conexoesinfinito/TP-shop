import React from 'react'
import './style.css'
import {Carousel} from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Carousel fade>
          <Carousel.Item>
            <div className="item it1">
              <h1>BEM VINDO A NOSSA LOJA</h1>
              <div className="box-bt">
              <button className='button'> SABER MAIS ...</button>
              <button className='button'> COMPRAR</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item it2">
            <h1>PRODUTOS DE BOA QUALIDADE</h1>
            <div className="box-bt">
            <button className='button'> SABER MAIS ...</button>
              <button className='button'> COMPRAR</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item it3">
            <h1>PRODUTOS DE BOA QUALIDADE</h1>
            <div className="box-bt">
            <button className='button'> SABER MAIS ...</button>
              <button className='button'> COMPRAR</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item it4">
            <h1>PRODUTOS DE BOA QUALIDADE</h1>
            <div className="box-bt">
            <button className='button'> SABER MAIS ...</button>
              <button className='button'> COMPRAR</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Home