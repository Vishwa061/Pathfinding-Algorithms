import React, {Component} from "react"

class Symbol extends Component{
    render(){
        return(
            <div className="symbol-border">
                <div className="symbol" style={{backgroundColor: this.props.color}}></div>
            </div>
        )
    }
}

export default Symbol