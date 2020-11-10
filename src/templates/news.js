import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

const News = props => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className="blog-image" alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="container">
        <h1> {props.data.contentfulGolfNews.title} </h1>
        <p> {props.data.contentfulGolfNews.publishedDate} </p>
        {documentToReactComponents(
          props.data.contentfulGolfNews.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default News

export const query = graphql`
  query($slug: String!) {
    contentfulGolfNews(slug: { eq: $slug }) {
      id
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
