import React, { Component } from "react"

class DropDownBtn extends Component {
    render() {
        return (
            <button className="DDBtn" onClick={this.props.func}>{this.props.name}</button>
        )
    }
}

export default DropDownBtn