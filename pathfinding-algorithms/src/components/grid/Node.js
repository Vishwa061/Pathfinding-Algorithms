import React, { Component } from "react"
import Handler from "../../general/Handler"

export default class Node extends Component {
    constructor(props) {
        super()
        this.state = {
            color: "gray",
            row: props.r,
            col: props.c
        }
        this.handleClick = this.handleClick.bind(this)
        this.setColor = this.setColor.bind(this)
    }

    handleClick() {
        switch (Handler.clickType) {
            case "add walls": {
                Handler.setWall(this)
                break
            }
            case "select start": {
                Handler.setStart(this)
                break
            }
            case "select end": {
                Handler.setEnd(this)
                break
            }
            default: {
                break
            }
        }
    }

    setColor(c) {
        this.setState(prevState => {
            return { color: c, row: prevState.row, col: prevState.col}
        })
    }

    render() {
        Handler.addNodeToGrid(this)
        return (
            <tbody
                className="node"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            />
        )
    }
}