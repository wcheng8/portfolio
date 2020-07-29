import React from "react"
import Layout from "../components/layout"
import { Button, Row } from "react-bootstrap"
import img from "../images/gatsby-icon.png"
import project1 from "../images/ruby-on-rails(edit).png"
import project2 from "../images/rails(edit).png"
import project3 from "../images/apollograph(edit).png"
import project4 from "../images/MERN(edit).png"

import CollapseElement from "../components/CollapseElement"
import { Link as Linkg } from "gatsby"
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
            <Linkg to="/contact" className="btn btn-primary">
              Contact Me
            </Linkg>
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
              src={project1}
              alt="Ruby Project"
            />
          </Link>
          <Link
            activeClass="active"
            to="project2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              width={250}
              height={250}
              className="mr-3"
              src={project2}
              alt="Rails Project"
            />
          </Link>
        </Row>
        <Row className="justify-content-around pt-5">
          <Link
            activeClass="active"
            to="project3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              width={250}
              height={250}
              className="mr-3"
              src={project3}
              alt="Apollo Project"
            />
          </Link>
          <Link
            activeClass="active"
            to="project4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              width={250}
              height={250}
              className="mr-3"
              src={project4}
              alt="MERN Project"
            />
          </Link>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center" id="project1">
          <CollapseElement
            title={"Guess the Match (Ruby)"}
            content={
              "A simple application made in the Ruby where the user plays a matching pair game on the command line. The default setting is 8 cards or 4 pairs, and players are allowed 3 seconds to remember the card opened. The pairs are shuffled after each play."
            }
            source={"https://github.com/wcheng8/MemoryGame"}
          />
        </Row>
        <Row className="d-flex justify-content-center" id="project2">
          <CollapseElement
            title={"Book Manager (Rails)"}
            content={
              "A web application created on Rails which serves as a two-way marketplace for used books. Users can also browse book recommendations through a basic search bar in the PostgreSQL database and have basic CRUD (Create, Read, Update and Delete) operations on book listings, recommendations and books. The application implements AWS to save book images and integrates Stripe to allow for payment processing. A chatroom feature is also integrated using websockets to allow for communication with different users."
            }
            source={"https://github.com/wcheng8/bookmarketapp"}
            site={"site"}
          />
        </Row>
        <Row className="d-flex justify-content-center" id="project3">
          <CollapseElement
            title={"What should I eat? (Apollo + GraphQL)"}
            content={
              "A web application that obtains recipe information from a Spoonacular API by GraphQL queries and integrates these queries into a React application with Apollo. The application fetches random recipes to recommend the user of new recipes and allows the user to save the recipe data into their favorite recipes with a MongoDB database. The user can search for new recipes throught the API or see existing saved recipes and obtain a random one from the database. Work in Progress..."
            }
            source={"https://github.com/wcheng8/whatshouldieat-"}
            site={"site"}
          />
        </Row>
        <Row className="d-flex justify-content-center" id="project4">
          <CollapseElement
            title={"MarkDown Converter (MERN)"}
            content={
              "A web application that uses the MERN (MongoDB, Express, React, Node) stack to create a simple blog application that allows users to write and save notes in MarkDown and different formats. Users can add tags to their blog posts and view other people's blog post. It also allows for users export the markdown files in .pdf format, which is saved on to AWS, and can be downloaded by the user."
            }
            source={"https://github.com/Harrisonp365/Blog-application"}
            site={"site"}
          />
        </Row>
      </Layout>
    </div>
  )
}

export default portfolio
