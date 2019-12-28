import React, { Component } from "react"

class DropDownBtn extends Component {
    constructor(props) {
        super()
        this.state = {
            name: props.name,
            func: props.func
        }
    }
    render() {
        return (
            <button className="DDBtn" onClick={this.state.func}>{this.state.name}</button>
        )
    }
}

export default DropDownBtn