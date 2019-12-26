import React, { Component } from "react"
import Title from "./components/Title"
import Grid from "./components/Grid"
import ControlPanel from "./components/ControlPanel"
import Legend from "./components/Legend"

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