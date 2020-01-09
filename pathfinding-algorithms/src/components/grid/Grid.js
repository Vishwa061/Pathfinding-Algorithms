import React, { Component } from "react"
import Node from "./Node"
import { TwoDArray } from "../../general/ArraysPlus"
import Handler from "../../general/Handler"

export default class Grid extends Component {
    constructor() {
        super()

        this.toggleMouseIsDown = this.toggleMouseIsDown.bind(this)
        this.setMouseIsDownToFalse = this.setMouseIsDownToFalse.bind(this)
    }

    toggleMouseIsDown() {
        if (Handler.mouseIsDown) {
            Handler.mouseIsDown = false
        } else {
            Handler.mouseIsDown = true
        }
        // console.log("toggled mouse is down")
    }

    setMouseIsDownToFalse() {
        Handler.mouseIsDown = false
    }

    render() {
        let rows = 13
        let cols = 36
        let nodeGrid = TwoDArray(rows)

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                nodeGrid[row][col] = <Node r={row} c={col} />
            }
        }


        return (
            <table className="grid"
                onMouseDown={this.toggleMouseIsDown}
                onMouseUp={this.toggleMouseIsDown}
                onMouseLeave={this.setMouseIsDownToFalse}
            >
                {nodeGrid}
            </table>
        )
    }
}