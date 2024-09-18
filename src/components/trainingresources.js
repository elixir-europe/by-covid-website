import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Table, Col } from "react-bootstrap"

const Trainingresources = () => {
  const data = useStaticQuery(graphql`
    query trainingresourcesQuery {
      dataYaml {
        trainingresources {
          title
          host
          duration
          url
          slidesUrl
          recordingUrl
          slidesrecordingUrl
        }
      }
    }
  `)
  return (
      <Col>
        <Table responsive striped bordered className="training">
          <thead class="bg-white">
            <tr>
              <th style={{width: 40 + '%'}} >Course Title</th>
              <th>Host</th>
              <th>Course Duration</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {data.dataYaml.trainingresources.map(node => (
            <tr>
              <td>{node.title}</td>
              <td>{node.host}</td>
              <td>{node.duration}</td>
              <td>
                {node.url && <a href={node.url} rel="noreferrer" class="btn btn-primary mb-2" target="_blank">Course Material</a>} 
                {node.slidesUrl && <a href={node.slidesUrl} rel="noreferrer" class="btn btn-primary mb-2 mr-05" target="_blank">View Slides</a>} 
                {node.recordingUrl && <a href={node.recordingUrl} rel="noreferrer" class="btn btn-primary mb-2" target="_blank">View Recording</a>} 
                {node.slidesrecordingUrl && <a href={node.slidesrecordingUrl} rel="noreferrer"  class="btn btn-primary mb-2" target="_blank">Slides & Recording</a>} 
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Col>
  )
}

export default Trainingresources
