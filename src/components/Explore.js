import React from "react"
import ExploreItem from "./ExploreItem"

export default function Explore({ data }) {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <ExploreItem
            data={data.greenfees}
            title="Green Fees"
            link="greenfees"
          />
          <ExploreItem data={data.about} title="About" link="about" />
          <ExploreItem data={data.tuition} title="Tuition" link="tuition" />
          <ExploreItem
            data={data.scorecard}
            title="Scorecard"
            link="scorecard"
          />
        </div>
      </div>
    </section>
  )
}
