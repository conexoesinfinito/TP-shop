import React from 'react'
import { Container, Row} from 'react-bootstrap'
import house from '../../dummydate/house'
import Card from '../../components/card'
import './style.css'

const Phouse = () => {
  return (


<div className='p-house padding' id='house'>
        <Container>
            <Row>
                {/* <h2>House</h2> */}
                {house.map((item,index) => 
                index < 4 && (
                  <Card
                  imagem={item.imagem}
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  />
                    
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Phouse
