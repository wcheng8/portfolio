import React from "react"
import Layout from "../components/layout"
import { Row, Button } from "reactstrap"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <Layout>
        <Row className="justify-content-center pt-5">
          <h1 className="pr-3">Hello, I'm </h1>
          <h1 className="border border-primary text-primary bg-dark">
            Wilkins Cheng
          </h1>
        </Row>
        <Row className="justify-content-center ">
          <h1>I'm a full-stack developer.</h1>
        </Row>
        <div className="d-flex justify-content-center pt-3">
          <Link className="btn btn-dark" to="/portfolio">
            Browse My Projects!
          </Link>
        </div>
      </Layout>
    </>
  )
}
