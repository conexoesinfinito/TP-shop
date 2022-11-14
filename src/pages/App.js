import React from 'react'
import Barra from '../components/Barra'
import Barra2 from '../components/Barra2'
import Home from '../components/Home'
import Produtos from '../components/Produtos'
import './styles/global.css'


const App = () => {
  return (
    <>
    <Home/>
    <Barra/>
    <Produtos/>
    <Barra2/>
    </>
  )
}

export default App