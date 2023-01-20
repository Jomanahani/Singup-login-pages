import React, { Component } from "react";

import "./style.css";

export default class EmailRegister extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input id='email' type="email" placeholder={this.props.value} onChange={this.handleChangeInput} />
      </div>
    );
  }
}
