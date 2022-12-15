import React, {useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from '../../components/Layout'
import { Container,Row} from 'react-bootstrap'
import sports from '../../dummydate/sports'
import image from '../../assets/sport.jpg'
import PageReader from '../../components/pageReader'
import Card from '../../components/card'
import './style.css'

const Sport = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <PageReader
      image={image}
      />
        <div className='sports padding'>
        <Container>
            <Row data-aos="fade-up">
                {sports.map((item) => (

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

export default Sport