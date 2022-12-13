import * as React from "react"
import { Container, Row } from 'react-bootstrap'
import Card from '../../components/card'
import Layout from "../../components/Layout"
import PageReader from "../../components/pageReader"
import game from '../../dummydate/game'
import img from '../../assets/game.jpg'
import './style.css'

const Game = () => {
  return (
    <Layout>
      <PageReader
      image={img}
      />
    <div className='games'>
        <Container>
            <Row>
            {game.map((item) => 
            (
                
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
    </Layout>
  )
}

export default Game