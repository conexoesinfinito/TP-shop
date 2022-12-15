import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row} from 'react-bootstrap'
import techno from '../../dummydate/techno'
import Card from '../../components/card'
import './style.css'



const Tecnologia = () => {
  return (

    <div className='tecnologia padding' id='tecnologia'>
    <Container>
            <h2>Tecnologia</h2>
        <Row>
          <div className="img-tech">
          <StaticImage src='../../assets/tech01.jpg' alt='' placeholder="blurred"/>
            </div>
            <div className="card-tech">
            {techno.map((item, index) =>
            index < 4 && (
              <Card
              imagem={item.imagem}
              title={item.title}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              />
            ))}
            </div>
        </Row>
    </Container>
</div>
  )
}

export default Tecnologia