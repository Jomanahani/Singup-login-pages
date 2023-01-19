import React, { Component } from "react";

import "./style.css";


let width = 0;
export default class StrengthBar extends Component {
  render() {
    const {password} = this.props;
    if (password.length >= 8) {
      width += 25;
    }
    if (password.match(/[0-9]/)) {
      width += 25;
    }
    if (password.match(/[!@#$%^&*]/)) {
      width += 25;
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      width += 25;
    }
    return (
      <div  className="strengthBar">
        <div style={{ width: `${width}%` }}></div>
      </div>
    );
  }
}
