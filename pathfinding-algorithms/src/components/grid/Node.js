import React, { Component } from "react"
import Handler from "../../general/Handler"

export default class Node extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: { backgroundColor: "gray" },
            row: props.r,
            col: props.c
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.setColor = this.setColor.bind(this)
    }

    handleMouseDown() {
        this.handleMouseEnter(true)
    }

    handleMouseEnter(isDown) {
        // console.log(Handler.mouseIsDown)
        if (Handler.mouseIsDown || isDown === true) {
            switch (Handler.clickType) {
                case "select walls": {
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
    }

    setColor(c, isAnimated) {
        if (isAnimated) {
            setTimeout(() => {
                this.setState(prevState => {
                    let animatedStyle = {
                        backgroundColor: c,
                        animationName: "waves",
                        animationDuration: "0.3s",
                        animationTimingFunction: "ease-out",
                        animationIterationCount: "5"
                    }
                    return { style: animatedStyle, row: prevState.row, col: prevState.col }
                })
            }, 0)
        }
        else {
            this.setState(prevState => {
                return { style: { backgroundColor: c }, row: prevState.row, col: prevState.col }
            })
        }
    }

    render() {
        Handler.addNodeToGrid(this)
        return (
            <tbody
                className="node"
                style={this.state.style}
                onMouseDown={this.handleMouseDown}
                onMouseEnter={this.handleMouseEnter}
            />
        )
    }
}