import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title='a random golf club'
      styleClass='default-background' />
    <Info />
  </Layout>

)


export const query = graphql`
  {
  img: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  prices: allContentfulPrices {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
      }
    }
  }
}
`



export default IndexPage
