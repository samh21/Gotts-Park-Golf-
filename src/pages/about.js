import React from "react"
import { Link, graphql } from "gatsby"

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
            styleClass='about-background' />
        <Info />
    </Layout>

)


export const query = graphql`
  {
  img: file(relativePath: {eq: "about.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



export default About
