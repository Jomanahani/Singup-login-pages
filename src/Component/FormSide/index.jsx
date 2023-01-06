import React, { Component } from "react";
import "./style.css";

export default class FormSide extends Component {
  render() {
    return <div className="formSide">{this.props.children}</div>;
  }
}
