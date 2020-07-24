import React, { Component } from "react"
import Layout from "../components/layout"
import { Form, Button, Col, Row } from "react-bootstrap"
import ContactNav from "../components/ContactNav"
import resume from "../images/WilkinsC_FullStack_Resume.pdf"
export class contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    enquire: "",
  }
  handleType = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Layout>
          <Row className="justify-content-around pt-5">
            <Col className="col-6">
              <Form
                method="post"
                action="https://getform.io/f/34335b63-2f7a-4f82-8b39-f3e5c41a656c"
              >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="fname"
                    placeholder="First Name"
                    onChange={this.handleType}
                    value={this.state.fname}
                  />
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lname"
                    placeholder="Last Name"
                    onChange={this.handleType}
                    value={this.state.lname}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    placeholder="Please enter your email"
                    onChange={this.handleType}
                    value={this.state.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Enquiries</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    name="enquire"
                    placeholder="How can I help you?"
                    onChange={this.handleType}
                    value={this.state.enquire}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>

            <Col className="col-4 col-offset-1">
              <h2>Contact Me</h2>
              <div>
                <p>Wilkins Cheng</p>
                <p>wilkins.cheng@gmail.com</p>
                <a href={resume}>Resume</a>
              </div>
              <ContactNav />
            </Col>
          </Row>
        </Layout>
      </div>
    )
  }
}

export default contact
