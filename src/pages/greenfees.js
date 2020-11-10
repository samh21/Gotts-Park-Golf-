import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import GreenfeesTable from '../components/GreenfeesTable'

const About = ({ data }) => (
  <Layout>
    <SEO title="Green Fees" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title='Green Fees'
      styleClass='generic-background' />
    <GreenfeesTable items={data.greenfees} />
  </Layout>

)


export const query = graphql`
  {
  img: file(relativePath: {eq: "greenfees.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  greenfees: allContentfulPrices(sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        createdAt
      }
    }
  }
}
`



export default About
