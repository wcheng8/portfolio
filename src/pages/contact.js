import React from "react"
import Layout from "../components/layout"
import { Form, Button, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
const contact = () => {
  return (
    <div>
      <Layout>
        <Row className="justify-content-around pt-5">
          <Col className="col-6">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="fname" placeholder="First Name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lname" placeholder="Last Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email"
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
                  type="enquiries"
                  placeholder="How can I help you?"
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
              <Link href="/">My Resume</Link>
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}

export default contact
