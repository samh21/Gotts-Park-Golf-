import { format } from "prettier"
import React from "react"

export default function Table({ title, prices }) {
  return (
    <div>
      <h5> {title}</h5>
      <table className="table table-sm table-striped table-borderless">
        <tbody>
          {prices.map(item => {
            const { node } = item
            return (
              <tr key={node.id}>
                <td>{node.title}</td>
                {node.price >= 50 ? (
                  <td> {highNumber.format(node.price)}</td>
                ) : (
                  <td> {lowNumber.format(node.price)}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const lowNumber = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})

const highNumber = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})
