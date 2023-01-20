import React, { Component } from "react";

import "./style.css";

export default class CheckBox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
          id="checked"
          />
          <label>I agree to terms & conditions</label>
      </div>
    );
  }
}
