import React, { Component } from "react";

import "./style.css";

export default class Button extends Component {
  render() {
    return (
      <button type="submit" className="registerButt">
        {this.props.title}
      </button>
    );
  }
}
