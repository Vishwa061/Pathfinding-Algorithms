import React, { Component } from "react"
import Node from "./Node"
import TwoDArray from "./TwoDArray"
class Grid extends Component {
    render() {
        var rows = 10
        var cols = 30
        var nodeGrid = TwoDArray(rows)
        var grid = []

        for (var i = 0; i < rows; i++) {
            grid.push(<tr />)
            for (var j = 0; j < cols; j++) {
                nodeGrid[i][j] = <Node color="gray" />
                grid.push(nodeGrid[i][j])
            }
        }
        console.log(nodeGrid)

        return (
            <div className="grid">
                <table>
                    {grid}
                </table>
            </div>
        )
    }
}

export default Grid