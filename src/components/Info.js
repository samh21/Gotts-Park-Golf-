import React from "react"
import { Link } from "gatsby"
import Title from "../components/Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-mited mb-5">
              Gotts Park Mansion House and home of Gotts Park Golf Club is situated 3 miles west of Leeds City centre and  was formally known as Armley House.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
