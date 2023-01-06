import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row,} from 'react-bootstrap'
import Card from '../../components/card'
import Data from '../data'
import './style.css'


const Psport = () => {
  return (
    <div className='p-sport padding' id='sport'>
        <Container>
                {/* <h2>Sports</h2> */}
            <Row>
              <div className="card-sport">
                {Data.sports.map((item,index) =>
                index < 4 &&  (
                  <Card
                  imagem={item.imagem}
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  />
                ))}
                </div>
                <div className="img-sport">
                <StaticImage src='../../assets/sport01.jpg' alt='' placeholder="blurred"/>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Psport