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
        <StaticImage src="../../assets/other/2.jpg" alt="" placeholder="blurred"/>
        </div>
        </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Bar2

