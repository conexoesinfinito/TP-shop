import React from "react";
import Carousel from "react-elastic-carousel";
import { Col, Container, Row} from "react-bootstrap";
import novidades from "../../dummydate/novidades";
import Card from '../../components/card'
import "./style.css";

const Novidades = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="novidades padding" id="novidades">
      <Container>
        {/* <h2>Novidades</h2> */}
        <Row>
          <Col lg={12}>
            <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
              {novidades.map((item) => (
                <Card
                imagem={item.imagem}
                title={item.title}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Novidades;
