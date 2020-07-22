import React from "react"
import Layout from "../components/layout"
import { Jumbotron, Button, Row } from "react-bootstrap"
import img from "../images/gatsby-icon.png"
const portfolio = () => {
  return (
    <div>
      <Layout>
        <h1 className="justify-content-center pt-5">Projects</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>

        <Row className="justify-content-around">
          <img
            width={250}
            height={250}
            className="mr-3"
            src={img}
            alt="Generic placeholder"
          />
          <img
            width={250}
            height={250}
            className="mr-3"
            src={img}
            alt="Generic placeholder"
          />
        </Row>
      </Layout>
    </div>
  )
}

export default portfolio
