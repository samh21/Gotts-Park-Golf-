import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import Info from '../components/Info'

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title='Some info about us'
      styleClass='generic-background' />
    <Info />
  </Layout>

)


export const query = graphql`
  {
  img: file(relativePath: {eq: "about.jpg"}) {
    childImageSharp {
      fluid(quality: 60, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



export default About
