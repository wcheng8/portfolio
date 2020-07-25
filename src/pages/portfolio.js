import React from "react"
import Layout from "../components/layout"
import { Button, Row } from "react-bootstrap"
import img from "../images/gatsby-icon.png"
import CollapseElement from "../components/CollapseElement"
import { Link } from "react-scroll"
const portfolio = () => {
  return (
    <div>
      <Layout>
        <h1 className="d-flex justify-content-center pt-5">Projects</h1>
        <p className="d-flex justify-content-center">
          These are some of the projects that I have finished or are ongoing!
        </p>
        <p>
          <div className="d-flex justify-content-center">
            <Button variant="primary">Contact Me</Button>
          </div>
        </p>

        {/* Strat of a project component */}
        <Row className="justify-content-around pt-5">
          <Link
            activeClass="active"
            to="project1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              width={250}
              height={250}
              className="mr-3"
              src={img}
              alt="Generic placeholder"
            />
          </Link>
          <img
            width={250}
            height={250}
            className="mr-3"
            src={img}
            alt="Generic placeholder"
          />
        </Row>
        <Row className="justify-content-around pt-5">
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
        <hr />
        <Row className="d-flex justify-content-center" id="project1">
          <CollapseElement
            title={"Project 1"}
            content={"content"}
            source={"source"}
            site={"site"}
          />
        </Row>
        <Row className="d-flex justify-content-center" id="project2">
          <CollapseElement title={"Project 2"} content={"content"} />
        </Row>
        <Row className="d-flex justify-content-center" id="project3">
          <CollapseElement title={"Project 3"} content={"content"} />
        </Row>
      </Layout>
    </div>
  )
}

export default portfolio
