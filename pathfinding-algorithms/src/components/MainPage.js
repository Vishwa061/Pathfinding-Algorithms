import React from "react"
import Title from "./Title"
import Grid from "./Grid"
import ControlPanel from "./ControlPanel"

function MainPage() {
    return(
        <div className="main-page">
            <Title/>
            <ControlPanel/>
            <Grid/>
        </div>
    )
}

export default MainPage