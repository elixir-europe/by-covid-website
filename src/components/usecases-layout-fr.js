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
  const bodyimage = getImage(mdx.frontmatter.embeddedImagesLocal)
  return (
    <div>
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
                        <Breadcrumb.Item href="/usecases-fr">
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
                      <p class="text-end mt-5">
                        <a href="/usecases-fr">Usecases</a>
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
