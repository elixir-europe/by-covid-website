import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query partnersQuery {
      dataYaml {
        partners {
          name
          url
          logo {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <Container className="full-width">
      <Row className="justify-content-md-start px-3">
        {data.dataYaml.partners.map(node => (
          <Col
            key={node.name}
            className="text-center d-flex align-items-stretch mb-4"
            md="auto"
          >
            <div class="border p-3 partner">
              <a href={node.url}>
                <img
                  src={node.logo.publicURL}
                  height="100"
                  alt={node.name + " logo"}
                  title={node.name}
                />
              </a>
              {/* <p class="mt-3"><a href={node.url}>{node.name}</a></p> */}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Partners
