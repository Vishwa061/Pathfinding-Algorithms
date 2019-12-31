import React, { Component } from "react"
import Node from "./Node"
import TwoDArray from "./TwoDArray"

var rows = 10
var cols = 30
var nodeGrid = TwoDArray(rows)

class Grid extends Component {
    render() {
        var grid = []
        for (var i = 0; i < rows; i++) {
            grid.push(<tbody />)
            for (var j = 0; j < cols; j++) {
                nodeGrid[i][j] = <Node />
                grid.push(nodeGrid[i][j])
            }
        }
        // console.log(nodeGrid) 

        return (
            <table className="grid">
                {grid}
            </table>
        )
    }
}

export default Grid

export { nodeGrid }