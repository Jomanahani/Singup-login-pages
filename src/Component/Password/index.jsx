import React, { Component } from "react";

export default class Password extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input type="text" placeholder={this.props.value} />
      </div>
    );
  }
}
