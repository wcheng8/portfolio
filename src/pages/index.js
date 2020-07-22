import React from "react"
import { Container } from "react-bootstrap"
import AppNavbar from "../components/AppNavbar"
import Layout from "../components/layout"
import logo from "../images/gatsby-astronaut.png"

export default function Home() {
  return (
    <>
      <Layout>
        <div style={{ color: `purple` }}>
          <h1>Hello Gatsby!boooohlala I am writting</h1>
          <p>What a world.</p>
          <img src={"https://source.unsplash.com/random/400x200"} alt="" />
        </div>
      </Layout>
    </>
  )
}
