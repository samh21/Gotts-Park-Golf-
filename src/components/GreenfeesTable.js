import React, { useState } from "react"
import Table from "./Table"

export default function GreenfeesTable({ items }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8  mx-auto text-center">
            <Table
              title="Pay and Play Ticket Prices"
              prices={items.edges.filter(edge => {
                return edge.node.category === "Day Ticket"
              })}
            />
            <Table
              title="Season Ticket Prices"
              prices={items.edges.filter(edge => {
                return edge.node.category === "Season Ticket"
              })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
