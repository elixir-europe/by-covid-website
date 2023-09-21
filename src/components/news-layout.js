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
  const image = getImage(mdx.frontmatter.newsImage)
  let hide = ''
  if(mdx.frontmatter.topImage)
  {
     hide = mdx.frontmatter.topImage
  }
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
        <body class={mdx.frontmatter.class} />
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
                        <Breadcrumb.Item href="/news">
                          News
                        </Breadcrumb.Item>
                      </Breadcrumb>
                      <h1 class="fs-1 mb-3 pb-0">{mdx.frontmatter.title}</h1>
                      <p>{mdx.frontmatter.date}</p>
                      <GatsbyImage
                        image={image}
                        alt={mdx.frontmatter.imageAlt}
                        //class="mb-5 {{ mdx.frontmatter.imageAlt }}"
                        className={`mb-5 ${hide}`}
                      />

                      <MDXProvider>
                        <MDXRenderer frontmatter={mdx.frontmatter} localImages={mdx.frontmatter.embeddedImagesLocal}>
                          {mdx.body}
                        </MDXRenderer>
                      </MDXProvider>
                      <p class="text-end mt-5">
                        <a href="/news">News</a>
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
  query PostQueryNews($id: String) {
    mdx(id: { eq: $id }, frontmatter: { class: { eq: "post" } }) {
      id
      body
      frontmatter {
        title
        description
        class
        imageTwitter {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageOg {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        topImage
        newsImage {
          childImageSharp {
            gatsbyImageData(width: 800, height: 400, quality: 90)
          }
        }
        embeddedImagesLocal {
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
