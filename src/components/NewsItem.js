import React from "react"
import { Link } from 'gatsby'

const NewsItem = ({ title, date, slug }) => {
  return (
    <div className="col-sm-8 mx-auto mb-3">
      <Link to={`/${slug}`} >
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{date}</p>
          </div>
        </div>
      </Link >
    </div>
  )
}

export default NewsItem
