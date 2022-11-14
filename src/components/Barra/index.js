import React from "react";
import "./style.css";
import { Link } from "gatsby";


const Barra = () => {
  return (
    <>
      <div className="barra-cont">
      <button className="btn-n"><Link to="#tecnlogia" className="link">TECNOLOGIA</Link></button>
      <button className="btn-n"><Link to="#" className="link">SPORT</Link></button>
      <button  className="btn-n"><Link to="#" className="link">CASA</Link></button>
      <button  className="btn-n"><Link to="#" className="link">GAME</Link></button>
      </div>
    </>
  );
};

export default Barra;
