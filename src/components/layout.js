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
        <Seo
          title={pageContext.frontmatter.title}
          description={pageContext.frontmatter.description}
          imageTwitter={pageContext.frontmatter.imageTwitter}
          imageOg={pageContext.frontmatter.imageOg}
          imageAlt={pageContext.frontmatter.imageAlt}
        />
        <Container className={pageContext.frontmatter.class}>
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
                <div class="w-60">
                  <h1 class="py-4">{pageContext.frontmatter.title}</h1>
                </div>
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
