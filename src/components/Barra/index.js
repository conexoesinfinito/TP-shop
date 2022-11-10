import React from "react";
import "./style.css";
import{FcMoneyTransfer} from 'react-icons/fc'
import{FaRegMoneyBillAlt} from 'react-icons/fa'
import{SlBasket,SlBadge,SlLike} from 'react-icons/sl'

const Barra = () => {
  return (
    <>
      <div className="barra-cont">
        <div className="circle">
          <SlBadge/>
          <div className="descrição">
            <p>Qualidade</p>
          </div>
        </div>
        <div className="circle">
          <SlLike/>
          <div className="descrição">
            <p>Conforto</p>
          </div>
        </div>
        <div className="circle">
          <SlBasket/>
          <div className="descrição">
            <p>Variadade</p>
          </div>
        </div>
        <div className="circle">
          <FaRegMoneyBillAlt/>
          <div className="descrição">
            <p>Baixo Custo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barra;
