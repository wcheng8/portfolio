import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Row, Col } from "reactstrap"

export default function About() {
  return (
    <Layout>
      <Row className="justify-content-center pt-5">
        <Col className="col-4 justify-content-md-center">
          <div>alt = My Face</div>
        </Col>
        <Col className="col-4 pl-3">
          <p>
            Hello there. I am a fullstack developer in training from Hong Kong.
            I used to work in Medical Device industry for a few years, before
            deciding to do a career switch to explore the new and exciting
            technology sector. I studied university in the states, but before
            that I went to school in Hong Kong. I am a motivated person, always
            looking for new skills to learn and opportunities. My hobbies
            include going for an occasional run, tennis, swimming, cooking,
            creating things and inspiring and helping people. Please take the
            time to check out my webpage and see if anything interests you, feel
            free to shoot me and email for an occasional chat!
          </p>
        </Col>
      </Row>
    </Layout>
  )
}
