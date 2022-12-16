import React from 'react'
import { Container, Row} from 'react-bootstrap'
import game from '../../dummydate/game'
import Card from '../../components/card'
import './style.css'

const Pgame = () => {
  return (


<div className='p-game padding' id='game'>
        <Container>
            <Row>
                {/* <h2>Game</h2> */}
                {game.map((item,index) => 
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

export default Pgame
