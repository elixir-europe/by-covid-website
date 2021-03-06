import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Numbers = props => {
  return (
    <div class="bg-dark text-light py-5 big-top-space">
      <span class="anchor" id="objectives"></span>
      <Container className="pt-5">
        <Row className="px-4">
          <Col>
            <h2 class="mt-0">{props.numbersTitle}</h2>
          </Col>
        </Row>
        <Row className="number-row px-4">
          <Col xs={12} sm={4} lg={4}>
            <div class="number mb-4">
              <span class="fw-bold d-block">1</span>
              {props.one}
            </div>
          </Col>
          <Col xs={12} sm={4} lg={4}>
            <div class="number mb-4">
              <span class="fw-bold d-block">2</span>
              {props.two}
            </div>
          </Col>
          <Col xs={12} sm={4} lg={4}>
            <div class="number mb-4">
              <span class="fw-bold d-block">3</span>
              {props.three}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center px-4">
          <Col xs={12} sm={4} lg={4}>
            <div class="number mb-4">
              <span class="fw-bold d-block">4</span>
              {props.four}
            </div>
          </Col>
          <Col xs={12} sm={4} lg={4}>
            <div class="number mb-4">
              <span class="fw-bold d-block">5</span>
              {props.five}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Numbers
