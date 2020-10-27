import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function ExploreItem({ data, title, link }) {
  return (
    <Link to={link} className="col-sm-12 col-md-6 col-lg-3 px-0">
      <BackgroundImage fluid={data.childImageSharp.fluid} className="explore ">
        <h2 className="title text-white text-uppercase text-center">{title}</h2>
      </BackgroundImage>
    </Link>
  )
}
