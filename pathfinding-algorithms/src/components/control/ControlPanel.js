import React, { Component } from "react"
import DropDown from "./DropDown"
import { build } from "./DropDownData"
import { solve } from "./DropDownData"
import { help } from "./DropDownData"

export default class ControlPanel extends Component {
    render() {
        return (
            <nav className="control-panel">
                <DropDown id="help" name="?" buttons={help} />
                <DropDown id="solve" name="SOLVE" buttons={solve} />
                <DropDown id="build" name="BUILD" buttons={build} />
            </nav>
        )
    }
}