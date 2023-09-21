import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Col, Card } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LatestNewsItem = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            image
            twitterUsername
            siteUrl
          }
        }
        allMdx(
          filter: {frontmatter: {class: {eq: "post"}}}
          sort: {fields: frontmatter___date, order: DESC}
          limit: 1
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                class
                imageAlt
                postType
                date(formatString: "D MMMM YYYY")
                newsImage {
                  childImageSharp {
                    gatsbyImageData(width: 800, height: 375, quality: 90)
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
        <Col
            key={data.allMdx.edges[0].node.frontmatter.date}
            className="align-items-stretch d-flex"
            xs={12}
            sm={12}
            lg={6}
        >
            <Card className="mb-4">
                <GatsbyImage
                    image={getImage(data.allMdx.edges[0].node.frontmatter.newsImage)}
                    alt={data.allMdx.edges[0].node.frontmatter.imageAlt}
                />
                <Card.Body className="position-relative">
                    <Card.Subtitle className="text-black-50">
                        {data.allMdx.edges[0].node.frontmatter.postType} |{" "}
                        {data.allMdx.edges[0].node.frontmatter.date}
                    </Card.Subtitle>
                    <Card.Title
                        as="h3"
                        className="mt-3 fw-bold fs-4 lh-sm"
                    >
                              {data.allMdx.edges[0].node.frontmatter.title}
                    </Card.Title>
                    <Card.Text className="mb-5 mt-3">
                        {data.allMdx.edges[0].node.frontmatter.description}
                    </Card.Text>
                    <div class="bottom-link-right arrow-right">
                        <a
                        href={data.allMdx.edges[0].node.frontmatter.slug}
                        aria-label="Read the full news story"
                        >
                            Read more
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )}
  ></StaticQuery>
)

export default LatestNewsItem
