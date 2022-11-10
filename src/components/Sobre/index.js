import React from 'react'
import './style.css'
import imgs1 from '../../images/img-sobre.jpg'

const Sobre = () => {
  return (
    <>
    <div className='sobre padding'>
      <div className='sobre-img'>
        <img src={imgs1} alt='imagem'/>
      </div>
        <div className='sobre-cont'>
    <h2>SOBRE NÓS</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
               versions of Lorem Ipsum.
      </p>
      
      </div>

    </div>

      
    </>
  )
}

export default Sobre