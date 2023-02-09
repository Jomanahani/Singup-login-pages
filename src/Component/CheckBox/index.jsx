import React, { Component } from "react";

import "./style.css";

export default class CheckBox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input
          id={this.props.id}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
          name={this.props.name}
        />
        <label>I agree to terms & conditions</label>
      </div>
    );
  }
}
