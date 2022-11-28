import * as React from "react"
import Bar from "../components/bar"
import Home from "../components/home"
import Layout from "../components/Layout"
import Phouse from "../components/p-house"
import Psport from "../components/p-sport"
import Produtos from "../components/Produtos"



const IndexPage = () => {
  return (
    <Layout>
      <Home/>
      <Bar/>
      <Produtos/>
      <Psport/>
      <Phouse/>
    </Layout>
  )
}

export default IndexPage


