import React, { Component } from "react"
import Handler from "../Handler"

export default class Node extends Component {
    constructor() {
        super()
        this.state = {
            color: "gray"
        }

        this.handleClick = this.handleClick.bind(this)
        this.setColor = this.setColor.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if (Handler.clickType === "add walls") {
                Handler.setWall(this)
                return { color: "black" }
            } else if (Handler.clickType === "select start") {
                Handler.setStart(this)
                return { color: "orange" }
            } else if (Handler.clickType === "select end") {
                Handler.setEnd(this)
                return { color: "blue" }
            }

            return prevState;
        })
    }

    setColor(c) {
        this.setState({ color: c })
    }

    render() {
        return (
            <tbody
                className="node"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            />
        )
    }
}