import React, { Component } from "react";

import "./style.css";

export default class StrengthBar extends Component {
  render() {
    return (
      <div className="strengthBar">
        <div
          style={{
            width: `${(this.props.strength / 4) * 100}%`,
            backgroundColor:
            this.props.strength === 0
                ? "red"
                : this.props.strength === 1
                ? "yellow"
                : this.props.strength === 2
                ? "#fdcd25"
                : this.props.strength === 3
                ? "#77fb4e"
                : "#2cca09",
          }}
        ></div>
      </div>
    );
  }
}
