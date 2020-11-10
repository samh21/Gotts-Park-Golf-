import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const Scorecard = ({ data }) => {
  return (
    <Layout>
      <SEO title="Scorecard" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={"Scorecard"}
        styleClass="generic-background"
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8  mx-auto">
            <Img fluid={data.img2.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "scorecard.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "scorecard.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Scorecard
