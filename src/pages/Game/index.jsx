import React, {useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { Container, Row } from 'react-bootstrap'
import Card from '../../components/card'
import Layout from "../../components/Layout"
import PageReader from "../../components/pageReader"
import game from '../../dummydate/game'
import img from '../../assets/game.jpg'
import './style.css'

const Game = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <PageReader
      image={img}
      />
    <div className='games'>
        <Container>
            <Row data-aos="fade-up">
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