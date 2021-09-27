import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, imageTwitter, imageOg, imageAlt, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImageTwitter =
            data.site.siteMetadata.siteUrl+imageTwitter || data.site.siteMetadata.image
        const metaImageOg =
            data.site.siteMetadata.siteUrl+imageOg || data.site.siteMetadata.image
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image',
                content: metaImageOg,
              },
              {
                property: 'og:image:width',
                content: "1200",
              },
              {
                property: 'og:image:height',
                content: "630",
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:site',
                content: data.site.siteMetadata.twitterUsername,
              },
              {
                property: 'twitter:image',
                content: metaImageTwitter,
              },
              {
                property: 'twitter:image:alt',
                content: imageAlt,
              },
            ]
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
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
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
