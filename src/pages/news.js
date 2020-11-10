import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import NewsItem from "../components/NewsItem"
import Info from "../components/Info"




const About = ({ data }) => {
  return (
    <Layout Layout>
      <SEO title="News" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="News & latest updates"
        styleClass="generic-background"
      />
      <div className="container pt-3">
        <div className="row">
          {data.posts.edges.map(post => {
            return (
              <NewsItem
                key={post.node.slug}
                title={post.node.title}
                date={post.node.publishedDate}
                slug={post.node.slug}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "news.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    posts: allContentfulGolfNews(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default About
