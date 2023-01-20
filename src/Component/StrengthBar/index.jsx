import React, { Component } from "react";

import "./style.css";


let width = 0;
export default class StrengthBar extends Component {
  render() {
    if (this.props.password.length >= 8) {
      width += 25;
    }
    if (this.props.password.match(/[0-9]/)) {
      width += 25;
    }
    if (this.props.password.match(/[!@#$%^&*]/)) {
      width += 25;
    }
    if (this.props.password.match(/[a-z]/) && this.props.password.match(/[A-Z]/)) {
      width += 25;
    }
    return (
      <div  className="strengthBar">
        <div style={{ width: `${width}%` }}></div>
      </div>
    );
  }
}
