import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Container} from 'react-bootstrap'

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
          }
        }
        allMdx {
          edges {
            node {
              frontmatter {
                title
                description
                class
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>

      <Container className={pageContext.frontmatter.class}>
        <Seo title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.description} />
        <Menu />
        <main>
        <h1>{pageContext.frontmatter.title}</h1>
          {children}
        </main>
        <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
