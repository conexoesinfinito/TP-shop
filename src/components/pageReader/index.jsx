import React from 'react'

import './style.css'
export default function PageReader(props) {
  return (
    <>
      <div className="pageReader">
        <img className='page_reader_img' src={props.image} alt="" />
      </div>
    </>
  )
}
