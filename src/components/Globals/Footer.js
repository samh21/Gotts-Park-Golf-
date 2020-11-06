import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h5 style={{ marginBottom: '0' }}>
              Green Lakes Golf Club. All rights reserved &copy;{new Date().getFullYear().toString()}
            </h5>
          </div>
        </div>
      </div>
    </footer>
  )
}
