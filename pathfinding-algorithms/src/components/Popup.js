import React, { Component } from "react";
import Handler from "../general/Handler";

export default class Popup extends Component {
  constructor() {
    super();
    this.state = {
      display: "none",
      header: "",
      message: ""
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ display: "block" });
  }

  hide() {
    this.setState({ display: "none" });
  }

  render() {
    Handler.popup = this;
    return (
      <div className="popup-background" style={{ display: this.state.display }}>
        <div
          className="popup"
          id="popup"
          style={{ display: this.state.display }}
        >
          <h2>{this.state.header}</h2>
          <p>{this.state.message}</p>
          <button className="close-popup-btn" onClick={this.hide}>
            X
          </button>
        </div>
      </div>
    );
  }
}
