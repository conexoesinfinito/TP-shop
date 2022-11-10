import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
        <Carousel slide={false}>
          <Carousel.Item>
            <div className="item it1">
              <h1>BEM VINDO A NOSSA LOJA</h1>
              <div className="box-bt">
              <button className="bt">Saber mais...</button>
              <button className="bt">Comprar</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item it2">
            <h1>PRODUTOS DE BOA QUALIDADE</h1>
            <div className="box-bt"> 
              <button className="bt">Saber mais...</button>
              <button className="bt">Comprar</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
    
    </>
  );
};

export default Home;
