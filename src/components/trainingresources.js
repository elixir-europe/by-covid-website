import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Table, Col } from "react-bootstrap"

const Trainingresources = () => {
  const data = useStaticQuery(graphql`
    query trainingresourcesQuery {
      dataYaml {
        trainingresources {
          title
          host
          format
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
              <th>Course Title</th>
              <th>Host</th>
              <th>Course Format</th>
              <th>Course Duration</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {data.dataYaml.trainingresources.map(node => (
            <tr>
              <td>{node.title}</td>
              <td>{node.host}</td>
              <td>{node.format}</td>
              <td>{node.duration}</td>
              <td>
                {node.url && <button class="btn btn-primary mb-2" target="_blank" onClick={()=>{navigate(`${node.url}`)}}>Course Material</button>} 
                {node.slidesUrl && <button class="btn btn-primary mb-2 mr-05" target="_blank" onClick={()=>{navigate(`${node.slidesUrl}`)}}>View Slides</button>} 
                {node.recordingUrl && <button class="btn btn-primary mb-2" target="_blank" onClick={()=>{navigate(`${node.recordingUrl}`)}}>View Recording</button>} 
                {node.slidesrecordingUrl && <button class="btn btn-primary mb-2" target="_blank" onClick={()=>{navigate(`${node.slidesrecordingUrl}`)}}>Slides & Recording</button>} 
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Col>
  )
}

export default Trainingresources
