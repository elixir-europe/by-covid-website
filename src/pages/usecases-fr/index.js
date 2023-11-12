import React from "react"
import { graphql, Link } from "gatsby"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"
import "../../styles.scss"
import Footer from "../../components/footer.js"
import Seo from "../../components/seo.js"
import Helmet from "react-helmet"
import Menu from "../../components/menu.js"
import { Container, Row, Col, Card } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const UseCasesIndex = ({ data }) => {
  const { edges: usecases } = data.allMdx

  return (
    <div>
      <Seo
        title="For citizen usecases"
        description="What difference will the BY-COVID project make and what does it mean for citizens?"
        imageTwitter="/twitter-for-citizens.jpg"
        imageOg="/og-for-citizens.jpg"
        imageAlt="Image for the BY-COVID usecases for citizens."
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
        <body className="usecases" />
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
                      <h1>For Citizens</h1>
                      <div class="position-relative social-media">
                        <div class="form">
                          <p class="mb-1 fs-6">
                            Select the language: <Link to="/usecases">English</Link> | <Link to="/usecases-fr"><strong>Français</strong></Link>| <Link to="/usecases-cz">Czech</Link> | <Link to="/usecases-nl">Dutch</Link>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container className="news-cards">
                <Row>
                <Col>

                <p className="text-center">
                Educational toolkits: <a href="/pdf/BY-COVID_toolkit_EN.pdf" target="_blank">English</a> | <a href="/pdf/BY-COVID_toolkit_FR.pdf" target="_blank">French</a> | <a href="/pdf/BY-COVID_toolkit_NL.pdf" target="_blank">Dutch</a> | <a href="/pdf/BY-COVID_toolkit_CZ.pdf" target="_blank">Czech</a> | <a href="/pdf/BY-COVID_toolkit_ES.pdf" target="_blank">Spanish</a>
</p>
                <p className="text-center">Quelle différence fera le projet BY-COVID ? Qu’est-ce que cela signifie pour les citoyens ? Découvrez les exemples ci-dessous pour en savoir plus.
</p>
                </Col>
                </Row>
                  <Row>
                    {usecases.map(({ node: post }) => (
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
                            <Card.Text className="mb-5 mt-3">
                              {post.frontmatter.description}
                            </Card.Text>
                            <div class="bottom-link-left arrow-left">
                              <a
                                href={"https://docs-google-com.translate.goog/forms/d/e/1FAIpQLSdknfycEDMrIJBD2_eLHYFeWMIqXwt2s1b_hDgTL6uAT5HAqw/viewform?_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp&entry.1166974658="+post.frontmatter.title}
                                aria-label="Share your view on this use case" target="_blank" rel="noreferrer"
                              >
                                Donnez votre avis
                              </a>
                            </div>
                            <div class="bottom-link-right arrow-right">
                              <a
                                href={post.fields.slug}
                                aria-label="Read the full news story"
                              >
                                En savoir plus
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
  query useCaseListIndexFr {
    allMdx(
      filter: { frontmatter: { postType: { eq: "UsecaseFr" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            class
            imageTwitter {
              childImageSharp {
                gatsbyImageData(width: 1024, height: 512, quality: 90)
              }
            }
            imageOg {
              childImageSharp {
                gatsbyImageData(width: 1200, height: 630, quality: 90)
              }
            }
            imageAlt
            postType
            date(formatString: "D MMMM YYYY")
            newsImage {
              childImageSharp {
                gatsbyImageData(width: 512, height: 288, quality: 90)
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

export default UseCasesIndex
