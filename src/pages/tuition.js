import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection'
import TuitionInfo from '../components/TuitionInfo'
import Table from "../components/Table"

const About = ({ data }) => {
  console.log(data.lessons.edges);
  return (
    < Layout >
      <SEO title="Tuition" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title='PGA Professional Golf Tuition'
        styleClass='generic-background' />
      <TuitionInfo></TuitionInfo>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8  mx-auto text-center">
              <Table title="Lessons" prices={data.lessons.edges} />
              <hr />
              <Table title="Junior Lessons" prices={data.juniorLessons.edges} />

            </div>
          </div>
        </div>
      </section>
    </  Layout>

  )
}

export const query = graphql`
  {
  img: file(relativePath: {eq: "tuition.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  lessons: allContentfulPrices(filter: {category: {eq: "Lessons"}, description: {description: {}}}) {
    edges {
      node {
        id
        category
        price
        title
      }
    }
  },
  juniorLessons: allContentfulPrices(filter: {category: {eq: "Junior Lessons"}, description: {description: {}}}) {
    edges {
      node {
        id
        category
        price
        title
      }
    }
  }
}
`



export default About
