import React, { Component } from "react"
import Symbol from "./Symbol"

export default class LegendElement extends Component {
    render() {
        return (
            <div className="legend-element" id={this.props.id}>
                <Symbol color={this.props.color} />
                {this.props.name}
            </div>
        )
    }
}