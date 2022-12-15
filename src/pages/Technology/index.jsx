import React, {useEffect } from 'react'
import Layout from '../../components/layout'
import { Container,Row} from 'react-bootstrap'
import techno from '../../dummydate/techno'
import PageReader from '../../components/pageReader'
import img from '../../assets/technology.jpg'
import Card from '../../components/card'
import AOS from "aos"
import "aos/dist/aos.css"
import './style.css'



const Technology = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <PageReader
      image={img}
      />
        <div className='technology padding'>
        <Container>
            <Row data-aos="fade-up">
            {techno.map((item) => (
              <>
              <Card
                imagem={item.imagem}
                title={item.title}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                />
        </> ))}
                </Row>
        </Container>
        </div>

    </Layout>
  )
}

export default Technology