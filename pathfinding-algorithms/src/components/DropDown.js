import React, { Component } from "react"
import DropDownBtn from "./DropDownBtn"

class DropDown extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            name: props.name,
            buttons: props.buttons
        }
    }
    render() {
        const dropDownBtns = Array.from(this.state.buttons).map(items => <DropDownBtn name={items.name} func={items.func}/>)
        // console.log(dropDownBtns)
        return (
            <div className="DD" id={this.state.id}>
                {this.state.name}
                {dropDownBtns}
            </div>
        )
    }
}

export default DropDown