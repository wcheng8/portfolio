import React from "react"
import { Row, Col } from "react-bootstrap"
import github from "../images/github.png"
import linkin from "../images/linkin.jpg"
import mail from "../images/mail.png"
import twitter from "../images/twitter.png"

const ContactNav = () => {
  return (
    <div>
      <Row className="pt-5">
        <Col className="col-3">
          <a href="https://github.com/wcheng8">
            <img src={github} alt="github" className="img-thumbnail" />
          </a>
        </Col>
        <Col className="col-3">
          <a href="https://www.linkedin.com/in/wilkinscheng/">
            <img src={linkin} alt="linkin" className="img-thumbnail" />
          </a>
        </Col>
        <Col className="col-3">
          <a href="mailto:wilkins.cheng@gmail.com">
            <img src={mail} alt="mail" className="img-thumbnail" />
          </a>
        </Col>
        <Col className="col-3">
          <a href="https://twitter.com/Wilkins09947144">
            <img src={twitter} alt="twitter" className="img-thumbnail" />
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default ContactNav
