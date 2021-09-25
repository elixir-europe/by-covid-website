import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles.scss'
import Footer from './footer'
//import Header from './header'
import Seo from './seo'
import Menu from './menu'

//import { Button } from 'react-bootstrap';

const Layout = ({ children, pageContext, ...props }) => (
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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.description} />
        <Menu />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
        <h1>{pageContext.frontmatter.title}</h1>

          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
