import React from 'react'
import { Carousel } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import './style.css'

const Bar2 = () => {
  return (
    <>
      <div className="bar2">
        <Carousel fade>
        <Carousel.Item>
        <div className="item">
        <StaticImage src="../../assets/other/1.jpg" alt="imagem" placeholder="blurred"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="item">
        <StaticImage src="../../assets/other/2.jpg" alt="imagem" placeholder="blurred"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="item">
        <StaticImage src="../../assets/other/3.jpg" alt="imagem" placeholder="blurred"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="item">
        <StaticImage src="../../assets/other/4.jpg" alt="imagem" placeholder="blurred"/>
        </div>
        </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Bar2

