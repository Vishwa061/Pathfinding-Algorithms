import React, { Component } from "react"
import DropDownBtn from "./DropDownBtn"

class DropDown extends Component {
    render() {
        const dropDownBtns = Array.from(this.props.buttons).map(items => <DropDownBtn name={items.name} func={items.func}/>)
        // console.log(dropDownBtns)
        return (
            <div className="DD" id={this.props.id}>
                {this.props.name}
                {dropDownBtns}
            </div>
        )
    }
}

export default DropDown