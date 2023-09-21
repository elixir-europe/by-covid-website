import React from "react"
import { graphql } from "gatsby"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"
import "../../styles.scss"
import Footer from "../../components/footer.js"
import Seo from "../../components/seo.js"
import Helmet from "react-helmet"
import Menu from "../../components/menu.js"
import { Container, Row, Col, Card } from "react-bootstrap"
import twitterIcon from "../../images/twitter-coloured.svg"
import linkedinIcon from "../../images/linkedin-coloured.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NewsletterForm from "../../components/newsletter-form"


const PostsIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <div>
      <Seo
        title="News & events"
        description="Find out the latest news and events from the BY-COVID project."
        imageTwitter="/twitter-news.jpg"
        imageOg="/og-news.jpg"
        imageAlt="Image for the BY-COVID News page."
      />
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
        <body className="news-events" />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
      </Container>
      <Container className="ful-width">
        <Row>
          <Col className="px-0">
            <div class="visually-hidden-focusable">
              <a href="#content">Skip to main content</a>
            </div>
            <main>
              <article id="content">
                <Container fluid>
                  <Row>
                    <Col>
                      <h1>News & events</h1>
                      <div class="position-relative social-media">
                        <div>
                          <div class="icons">
                            <a
                              href="https://www.linkedin.com/company/by-covid/"
                              class="d-inline-block"
                            >
                              <img
                                src={linkedinIcon}
                                alt="LinkedIn icon"
                                width="40"
                                class="social"
                              />
                            </a>
                            <a
                              href="https://twitter.com/BYCOVID_eu"
                              class="d-inline-block ms-2"
                            >
                              <img
                                src={twitterIcon}
                                alt="Twitter icon"
                                width="40"
                                class="social"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="form">
                          <p class="mb-1 fs-7">
                            Sign up for our quarterly newsletter.
                          </p>
                          <NewsletterForm />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container className="news-cards">
                  <Row>
                    {posts.map(({ node: post }) => (
                      <Col
                        key={post.frontmatter.date}
                        className="align-items-stretch d-flex"
                        xs={12}
                        sm={12}
                        lg={6}
                      >
                        <Card className="mb-4">
                          <GatsbyImage
                            image={getImage(post.frontmatter.newsImage)}
                            alt={post.frontmatter.imageAlt}
                          />
                          <Card.Body className="position-relative">
                            <Card.Subtitle className="text-black-50">
                              {post.frontmatter.postType} |{" "}
                              {post.frontmatter.date}
                            </Card.Subtitle>
                            <Card.Title
                              as="h3"
                              className="mt-3 fw-bold fs-4 lh-sm"
                            >
                              {post.frontmatter.title}
                            </Card.Title>
                            <Card.Text className="mb-5 mt-3">
                              {post.frontmatter.description}
                            </Card.Text>
                            <div class="bottom-link-right arrow-right">
                              <a
                                href={post.fields.slug}
                                aria-label="Read the full news story"
                              >
                                Read more
                              </a>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
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
  query postListIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "news-event" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            class
            imageTwitter
            imageOg
            imageAlt
            postType
            redirect
            category
            date(formatString: "D MMMM YYYY")
            newsImage {
              childImageSharp {
                gatsbyImageData(width: 800, height: 400, quality: 90)
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
`

export default PostsIndex
