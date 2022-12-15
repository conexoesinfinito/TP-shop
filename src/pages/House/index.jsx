import React, {useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from '../../components/layout'
import { Container,Row } from 'react-bootstrap'
import PageReader from "../../components/pageReader"
import house from '../../dummydate/house'
import img from '../../assets/house.jpg'
import Card from '../../components/card'
import './style.css'

const House = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
       <PageReader
      image={img}
      />
       <div className='house padding'>
        <Container>
            <Row data-aos="fade-up">
                {house.map((item) => (

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

export default House