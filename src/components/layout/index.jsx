import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Header from '../header';
import Footer from '../footer';



const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Header/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
