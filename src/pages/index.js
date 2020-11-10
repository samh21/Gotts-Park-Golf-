import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Info'
import Explore from "../components/Explore"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title='Green lakes golf club'
      styleClass='default-background' />
    <Info link={{ to: '/about', title: 'about' }} />
    <Explore data={data} />
  </Layout>

)


export const query = graphql`
  {
  img: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  greenfees: file(relativePath: {eq: "greenfees.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  about: file(relativePath: {eq: "about.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  scorecard: file(relativePath: {eq: "scorecard.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  tuition: file(relativePath: {eq: "tuition.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 500) {
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
