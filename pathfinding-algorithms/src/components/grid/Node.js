import React, { Component } from "react"
import Handler from "../Handler"

class Node extends Component {
    constructor(row, col) {
        super()
        this.state = {
            color: "gray",
            row: row,
            col: col
        }

        this.handleClick = this.handleClick.bind(this)
        this.grayOut = this.grayOut.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if (Handler.clickType === "add walls") {
                Handler.setWall(this)
                return { color: "black" }
            }
            else if (Handler.clickType === "select start") {
                Handler.setStart(this)
                return { color: "orange" }
            }
            else if (Handler.clickType === "select end") {
                Handler.setEnd(this)
                return { color: "blue" }
            }

            return prevState;
        })
    }

    grayOut() {
        // console.log("grayed out")
        this.setState(prevState => {
            return { color: "gray", row: prevState.row, col: prevState.col }
        })
    }

    render() {
        return (
            <tbody className="node" style={{ backgroundColor: this.state.color }} onClick={this.handleClick} />
        )
    }
}

export default Node