import * as React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Circles = () => {
  return (
    <Container className="full-width">
      <Row>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fs-3 fw-bold d-block mb-4">12M</span> Euros
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fs-3 fw-bold d-block mb-4">53</span> Partners
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fs-3 fw-bold d-block mb-4">20</span> Countries
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fs-3 fw-bold d-block mb-4">36</span> Months
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Circles
