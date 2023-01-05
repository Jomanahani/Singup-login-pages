import React, { Component } from "react";

import "./style.css";

export default class Button extends Component {
  render() {
    return <button className="registerButt">{this.props.title}</button>;
  }
}
