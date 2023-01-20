import React, { Component } from "react";

export default class RePassword extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input
          id="rePassword"
          type="text"
          placeholder={this.props.value}
          onChange={this.handleChangeInput}
        />
      </div>
    );
  }
}
