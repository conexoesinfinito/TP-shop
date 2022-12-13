import * as React from "react"
import Bar2 from "../components/bar2"
import Home from "../components/home"
import Layout from "../components/Layout"
import Newsletter from "../components/newsletter"
import Novidades from "../components/novidades"
import Phouse from "../components/p-house"
import Psport from "../components/p-sport"
import Tecnologia from "../components/p-technology"





const IndexPage = () => {
  return (
    <Layout>
      <Home/>
      <Novidades/>
      <Tecnologia/>
      <Psport/>
      <Bar2/>
      <Phouse/>
      <Newsletter/>
    </Layout>
  )
}

export default IndexPage


