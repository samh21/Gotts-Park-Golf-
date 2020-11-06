import React from "react"
import { Link } from "gatsby"
import Title from "../components/Globals/Title"

export default function Info({ link }) {
  console.log(link)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-mited mb-5">
              Our Story Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Doloremque accusantium repellendus minus architecto qui,
              vitae cumque ab debitis libero officiis dolorem dolorum iure? Odit
              distinctio sapiente esse ducimus quia iure iste voluptate, id in
              commodi maiores assumenda, velit possimus. Eveniet.
            </p>
            {link && (
              <Link to={link.to}>
                <button className="btn text-uppercase btn-yellow">
                  {link.title}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
