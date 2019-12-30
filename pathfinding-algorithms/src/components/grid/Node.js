import React, { Component } from "react"

class Node extends Component {
    render() {
        return (
            <div className="node" style={{ backgroundColor: this.props.color}} />
        )
    }
}

export default Node