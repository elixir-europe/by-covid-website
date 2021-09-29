import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Astro from '../components/image'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import "../styles.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="The home page of the BY-COVID project."
        keywords={['gatsby', 'application', 'react']}
      />

      {/* ***** CONTENT STARTS HERE ***** */}
      <h1>Hi people</h1>
      <Astro />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <Link to="/about">Go to About</Link>

      {/* ***** CONTENT ENDS ***** */}
    </Layout>
  )
}

export default IndexPage
