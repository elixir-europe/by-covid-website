import * as React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Circles = (props) => {
  return (
    <Container className="full-width">
      <Row>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fw-bold d-block">{props.circle1Value}</span>
               {props.circle1}
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fw-bold d-block">{props.circle2Value}</span>
              {props.circle2}
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fw-bold d-block">{props.circle3Value}</span>
              {props.circle3}
            </div>
          </div>
        </Col>
        <Col xs={6} sm={3} lg={3}>
          <div class="circle mb-4">
            <div class="circle-txt">
              <span class="fw-bold d-block">{props.circle4Value}</span>
              {props.circle4}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Circles
