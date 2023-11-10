import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../styles.scss"
import Footer from "./footer"
import Seo from "./seo"
import Menu from "./menu"
import Helmet from "react-helmet"

const PostTemplate = ({ data: { mdx } }) => {
  const bodyimage = getImage(mdx.frontmatter.embeddedImagesLocalUc)
  const postTitle = mdx.frontmatter.title
  return (
    <div>
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
        <body class="usecases" />
      </Helmet>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        imageTwitter={mdx.frontmatter.imageTwitter}
        imageOg={mdx.frontmatter.imageOg}
        imageAlt={mdx.frontmatter.imageAlt}
      />
      <Container>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div class="visually-hidden-focusable">
              <a href="#content">Skip to main content</a>
            </div>
            <main>
              <article id="content">
                <Container>
                  <Row>
                    <Col xs={12} sm={12} lg={7}>
                      <Breadcrumb>
                        <Breadcrumb.Item href="/usecases-cz">
                        For citizens
                        </Breadcrumb.Item>
                      </Breadcrumb>
                      <GatsbyImage
                        image={bodyimage}
                        alt={mdx.frontmatter.imageAlt}
                        class="mb-1"
                      />
                      <h1 class="fs-4 mb-3 pb-0 text-center">{mdx.frontmatter.title}</h1>
                      <MDXProvider>
                        <MDXRenderer frontmatter={mdx.frontmatter}>
                          {mdx.body}
                        </MDXRenderer>
                      </MDXProvider>
                      <hr />
                      <p><strong> YOUR THOUGHTS</strong></p>
                      <p>We'd love to hear what you think about these issues.</p>
                      <button class="btn btn-primary mb-4" onClick={() => window.open("https://docs-google-com.translate.goog/forms/d/e/1FAIpQLSdknfycEDMrIJBD2_eLHYFeWMIqXwt2s1b_hDgTL6uAT5HAqw/viewform?_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp&entry.1166974658="+postTitle, '_blank')}>Share your views</button>
                      <p class="text-end mt-5">
                        <a href="/usecases-cz">For citizens</a>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </article>
            </main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export const pageQuery = graphql`
  query UseCaseQueryFr($id: String) {
    mdx(id: { eq: $id }, frontmatter: { class: { eq: "post" } }) {
      id
      body
      frontmatter {
        title
        description
        class
        imageTwitter
        imageOg
        imageAlt
        postType
        newsImage {
          childImageSharp {
            gatsbyImageData(width: 800, height: 375, quality: 90)
          }
        }
        embeddedImagesLocalUc {
          childImageSharp {
            gatsbyImageData
          }
        }
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`
export default PostTemplate
