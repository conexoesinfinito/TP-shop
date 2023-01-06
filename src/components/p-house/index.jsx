import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Card from '../../components/card'
import Data from '../data'
import './style.css'

const Phouse = () => {
  return (


<div className='p-house padding' id='house'>
        <Container>
            <Row>
                {/* <h2>House</h2> */}
                {Data.house.map((item,index) => 
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
