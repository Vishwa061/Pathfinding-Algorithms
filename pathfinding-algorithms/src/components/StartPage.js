import React from "react"

function StartPage(){
    return(
        <div className="start-page">
            <h1>PATHFINDING ALGORITHMS</h1>
            <button id="start-button" onClick={startClicked}>START</button>
        </div>
    )
}

function startClicked(){
    console.log("CLICKED")
    const url = "https://www.google.com"
    window.location.replace(url)
    
}

export default StartPage
