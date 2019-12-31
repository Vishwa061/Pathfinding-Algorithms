import React from "react"
import ReactDOM from "react-dom"
import * as firebase from "firebase"
import firebaseConfig from "./firebaseConfig"
import App from "./App"
import "./style.css"

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById("root"))