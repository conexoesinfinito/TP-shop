import React from 'react'
import './style.css'
import prod1 from '../../images/pc1.jpg'
import prod2 from '../../images/pc2.jpg'
import prod3 from '../../images/pc3.jpg'
import {AiFillStar,AiOutlineStar,AiFillShopping} from 'react-icons/ai'


const Produtos = () => {
  return (
    <div className='produtos padding'>
      <div className='container'>
        <div className='card'>
          <div className='imagem'>
            <img src={prod1} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i className='Ai'><AiFillStar/></i>
                <i className='Ai'><AiFillStar/></i>
                <i className='Ai'><AiFillStar/></i>
                <i className='Ai'><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod2} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod3} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod2} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod1} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod3} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#' className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
            <a href='#'  className='Ai'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod2} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod3} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiOutlineStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
          </div>
        </div>
        <div className='card'>
          <div className='imagem'>
            <img src={prod1} alt='computador'/>
          </div>
          <div className='info'>
            <h3 className='title'> Pc-Hp</h3>
            <div className='sub-info'>
              <div className='preco'>$1000 <span>$3000</span></div>
              <div className='stars'>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiFillStar/></i>
                <i><AiOutlineStar/></i>
              </div>
            </div>
          </div>
          <div className='overlay'>
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
            <a href='#'><AiFillShopping/></a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produtos