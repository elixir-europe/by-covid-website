import * as React from "react"
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'gatsby'
import bycovidIcon from "../images/by-covid-icon.svg"
import euIcon from "../images/eu-icon.svg"
import twitterIcon from "../images/linkedin-icon.svg"
import linkedinIcon from "../images/twitter-icon.svg"
import NewsletterForm from '../components/newsletter-form'


const Footer = () => {
  return (
    <>
      <footer class="py-7 bg-dark text-white">
      <Container>
       <Row>
        <Col lg={5} xs={12}>
          <img src={bycovidIcon} alt="BY-COVID icon" width="60" />
          <p class="mt-2 fs-7">Sign up to receive our quarterly newsletter for news, updates and outcomes.</p>
        <NewsletterForm />
        </Col>
        <Col>
          <h2 class="mb-3 fs-6 fw-bold"><Link to="/about" className="text-light">About</Link></h2>
          <ul class="list-unstyled fs-7">
            <li><Link to="/about#objectives">Objectives</Link></li>
            <li><Link to="/about#structure">Structure</Link></li>
            <li><Link to="/about#partners">Partners</Link></li>
          </ul>
        </Col>
        <Col>
          <h2 class="mb-3 fs-6 fw-bold"><Link to="/outcomes" className="text-light">Outcomes</Link></h2>
          <ul class="list-unstyled fs-7">
            <li><Link to="/outcomes#deliverables">Deliverables & milestones</Link></li>
            <li><Link to="/outcomes#publications">Publications</Link></li>
          </ul>
          <h2 class="mb-0 fs-6 fw-bold"><Link to="/news-events" className="text-light">News & events</Link></h2>
        </Col>
        <Col>
          <h2 class="mb-3 fs-6 fw-bold"><Link to="/outreach-media" className="text-light">Outreach & media</Link></h2>
          <ul class="list-unstyled fs-7">
            <li><Link to="/outreach-media">Outreach</Link></li>
            <li><Link to="/outreach-media">Media</Link></li>
            <li><Link to="/outreach-media#contact">Contact us</Link></li>
          </ul>
        </Col>
       </Row>
       <Row className="pt-3 pt-lg-5 no-gutters">
         <Col lg={6}>
              <img src={euIcon} alt="EU icon" width="40" class="float-start mt-1 me-3 mb-5 mb-md-0"/>
              <p class="fs-7 mt-0 ms-5">BY-COVID receives funding from the European Union’s Horizon Europe Research and Innovation Programme under grant agreement number 101046203.</p>
         </Col>
         <Col lg={3}>
         <div class="mx-auto text-center text-lg-start">
         <ul class="list-unstyled fs-7 mx-auto w-50">
           <li class="d-inline d-lg-block"><Link to="/privacy">Privacy</Link></li>
           <li class="d-inline d-lg-block ps-3 ps-lg-0"><Link to="/accessibility">Accessibility</Link></li>
         </ul>
         </div>
         </Col>
         <Col xs={{ order: 'first' }} lg={{ order: 'last' }}>
           <div class="text-center pe-0 pe-lg-4 mb-4 mb-lg-0">
             <a href="https://www.linkedin.com/company/by-covid/" class="d-inline-block ms-3"><img src={linkedinIcon} alt="LinkedIn icon" width="45" class="social" /></a>
             <a href="https://twitter.com/BYCOVID_eu" class="d-inline-block ms-3"><img src={twitterIcon} alt="Twitter icon" width="45" class="social" /></a>
            </div>
         </Col>
        </Row>
      </Container>
      </footer>
    </>
  )
}

export default Footer
