import React, { Component } from "react"
import p5 from "p5"
import P5Wrapper from "react-p5-wrapper"

class Grid extends Component {
    render() {
        return (
            <div className="grid">
                <P5Wrapper sketch={sketch} />
            </div>
        )
    }
}

function sketch (p) {
    let rotation = 0;
  
    p.setup = function () {
      p.createCanvas(600, 400, p.WEBGL);
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {
      p.background(100);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.box(100);
      p.pop();
    };
  };

export default Grid