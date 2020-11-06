import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = {
    isNavbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/greenfees",
        text: "Green Fees",
      },
      {
        id: 3,
        path: "/tuition",
        text: "Tuition",
      },
      {
        id: 4,
        path: "/scorecard",
        text: "Scorecard",
      },
      {
        id: 5,
        path: "/about",
        text: "About",
      },
    ],
  }

  navbarHandler = () => {
    this.state.isNavbarOpen
      ? this.setState({
        isNavbarOpen: false,
        css: "collapse navbar-collapse",
      })
      : this.setState({
        isNavbarOpen: true,
        css: "collapse navbar-collapse show",
      })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src="" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link  text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
