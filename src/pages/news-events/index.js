
import React from 'react'
import { graphql, Link } from 'gatsby'
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/600.css"
import '../../styles.scss'
import Footer from '../../components/footer.js'
//import Header from './header'
import Seo from '../../components/seo.js'
import Helmet from 'react-helmet'
import Menu from '../../components/menu.js'
import { Container, Row, Col, Card} from 'react-bootstrap'
import twitterIcon from "../../images/twitter-coloured.svg"
import linkedinIcon from "../../images/linkedin-coloured.svg"
import youTubeIcon from "../../images/youtube-coloured.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// const renderCard = (card, index) => {
//   return (
//     <Card className="mb-4">
//         <Card.Body className="position-relative">
//           <Card.Subtitle className="text-black-50">{data.allMdx.edges.node.frontmatter.postType} | 22 Oct 2021</Card.Subtitle>
//           <Card.Title as="h3" className="mt-3 fw-bold fs-4 lh-sm">A first news story</Card.Title>
//           <Card.Text className="mb-5 mt-3">
//            A bit of blurb about the news story.
//           </Card.Text>
//           <div class="bottom-link"><a href="https://mysite.com"  aria-label="Read the paper on the Zenodo website">
//            Read more
//           </a></div>
//         </Card.Body>
//       </Card>
//   )
// }





const PostsIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <div>
    <Seo
      title="News & events"
      description="Find out the latest news and enents from the COVID-19 project."
    />
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
    <Container fluid>
      <Row>
        <Col>
        <div class="visually-hidden-focusable"><a href="#content">Skip to main content</a></div>
        <main>
          <article id="content">
            <div class="w-60">
              <h1>News & events</h1>
              <div class="position-relative social-media">
              <div>
               <div class="icons">
                  <a href="linkedin.html" class="d-inline-block"><img src={linkedinIcon} alt="LinkedIn icon" width="40" class="social" /></a>
                  <a href="linkedin.html" class="d-inline-block ms-2"><img src={twitterIcon} alt="Twitter icon" width="40" class="social" /></a>
                  <a href="linkedin.html" class="d-inline-block ms-3"><img src={youTubeIcon} alt="YouTube icon" width="40" class="social py-1" /></a>
                </div>
               </div>
             <div class="form">
             <p class="mb-1 fs-7">Sign up for our quarterly newsletter.</p>
             <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
               <label htmlFor="mce-EMAIL" class="visually-hidden-focusable">Subscribe</label>
               <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
               <div class="visually-hidden" aria-hidden="true"><input type="text" name="b_751beffce2e491f94d6f66918_358aeb763b" tabindex="-1" value="" /></div>
               <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-secondary btn-sm rounded-0 inline-button py-2"/>
             </form>
             </div>
             </div>
            </div>
            <div class="w-60">
            <Container className="mt-5 big-top-space full-width">
              <Row>
              {posts.map(({ node: post }) => (
               <Col className="align-items-stretch d-flex"  xs={12} sm={12} lg={6}>
               <Card className="mb-4">
                 <GatsbyImage image={getImage(post.frontmatter.newsImage)} alt={post.frontmatter.imageAlt} />
                       <Card.Body className="position-relative">
                         <Card.Subtitle className="text-black-50">{post.frontmatter.postType} | {post.frontmatter.date}</Card.Subtitle>
                         <Card.Title as="h3" className="mt-3 fw-bold fs-4 lh-sm">{post.frontmatter.title}</Card.Title>
                         <Card.Text className="mb-5 mt-3">
                          {post.frontmatter.description}
                         </Card.Text>
                         <div class="bottom-link"><Link to={post.fields.slug}>
                          Read more
                         </Link></div>
                       </Card.Body>
                     </Card>
                     </Col>
              ))}
              </Row>
              </Container>
            </div>
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
    allMdx (filter: {frontmatter: {class: {eq: "post"}}}) {
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
            date
            newsImage {
              childImageSharp {
                gatsbyImageData(width: 400)
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