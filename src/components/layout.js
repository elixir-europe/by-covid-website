import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"

import "../styles.scss"
import Footer from "./footer"
import Seo from "./seo"
import Menu from "./menu"
import Helmet from "react-helmet"

const Layout = ({ location, children, pageContext, ...props }) => (
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
                imageTwitter
                imageOg
              }
            }
          }
        }
      }
    `}
    render={data => 
      (
      <>
        <Helmet>
          <script>
            var _paq = window._paq = window._paq || [];
            _paq.push(["disableCookies"]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() &#123; 
                var u="https://webstats.elixir-europe.org/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '5']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                &#125;)();
          </script>
        </Helmet>
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
              <Menu />
        </Container>
        <Container className="full-width">
          <Row className="mx-0">
            <Col>
              <div class="visually-hidden-focusable">
                <a href="#content">Skip to main content</a>
              </div>
              <main>
                <article id="content">
                  <Container className="px-3">
                    <Row>
                      <Col>
                        <h1>{pageContext.frontmatter.customTitle ? pageContext.frontmatter.customTitle:pageContext.frontmatter.title}</h1>
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
