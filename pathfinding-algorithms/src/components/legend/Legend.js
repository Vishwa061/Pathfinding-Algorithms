import React, {Component} from "react"
import LegendElement from "./LegendElement"

class Legend extends Component{
    render(){
        return(
            <div className="legend">
                <LegendElement name="End" id="end-element" color="blue"/>
                <LegendElement name="Start" color="orange"/>
                <LegendElement name="Wall" color="black"/>
                <LegendElement name="Explored Path" color="red"/>
                <LegendElement name="Shortest Path" color="green"/>
            </div>
        )
    }
}

export default Legend