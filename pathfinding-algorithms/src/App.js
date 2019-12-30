import React, { Component } from "react"
import Title from "./components/Title"
import Grid from "./components/grid/Grid"
import ControlPanel from "./components/control/ControlPanel"
import Legend from "./components/legend/Legend"

class App extends Component {
    render() {
        return (
            <div className="app">
                <Title />
                <ControlPanel />
                <Grid />
                <Legend/>
            </div>
        )
    }
}

export default App