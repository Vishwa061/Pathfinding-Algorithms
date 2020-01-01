import React, { Component } from "react"
import Node from "./Node"
import TwoDArray from "../TwoDArray"

export default class Grid extends Component {
    render() {
        let rows = 13
        let cols = 36
        let nodeGrid = TwoDArray(rows)

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                nodeGrid[row][col] = <Node r={row} c={col}/>
            }
        }

        return (
            <table className="grid">
                {nodeGrid}
            </table>
        )
    }
}