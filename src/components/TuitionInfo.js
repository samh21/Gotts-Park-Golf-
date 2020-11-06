import React from "react"
import { Link } from "gatsby"
import Title from "../components/Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Professional Golf Tuition With John Doe"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-mited mb-5">
              Golf tuition Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsum placeat enim corrupti? Corrupti dolorum nam laborum
              reiciendis ducimus dolorem aut necessitatibus quia natus,
              aspernatur nemo, ipsum, deserunt optio neque? Corporis error rerum
              culpa, accusamus fugit nostrum. Incidunt harum repellendus
              aspernatur accusamus accusantium eveniet blanditiis, itaque illum
              unde debitis deleniti!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
