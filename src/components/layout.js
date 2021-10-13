import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col} from 'react-bootstrap'
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"

import '../styles.scss'
import Footer from './footer'
//import Header from './header'
import Seo from './seo'
import Menu from './menu'
import Helmet from 'react-helmet'



//import { Button } from 'react-bootstrap';

const Layout = ({ location,children, pageContext, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        allMdx {
          edges {
            node {
              frontmatter {
                title
                description
                class
                imageOg
                imageTwitter
              }
            }
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet>
          <body className={pageContext.frontmatter.class} />
        </Helmet>
        <Seo
          title={pageContext.frontmatter.title}
          description={pageContext.frontmatter.description}
          imageTwitter={pageContext.frontmatter.imageTwitter}
          imageOg={pageContext.frontmatter.imageOg}
          imageAlt={pageContext.frontmatter.imageAlt}
        />
        <Container>
          <Row>
           <Col>
            <Menu />
           </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
            <div class="visually-hidden-focusable"><a href="#content">Skip to main content</a></div>
            <main>
              <article id="content">
              <Container>
                <Row>
                 <Col>
                  <h1>{pageContext.frontmatter.title}</h1>
                  </Col>
                 </Row>
               </Container>
                  {children}
              </article>
            </main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
