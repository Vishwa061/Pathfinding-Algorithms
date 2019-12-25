import React from "react"
import ReactDOM from "react-dom"
import MainPage from "./MainPage";

function StartButton() {
    return(
        <button id="start-button" onClick={startClicked}>START</button>
    )
}

function startClicked() {
    const root = document.getElementById("root")
    ReactDOM.unmountComponentAtNode(root)
    ReactDOM.render(<MainPage />, root)
}

export default StartButton