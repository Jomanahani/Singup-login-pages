import React, { Component } from "react";

export default class Password extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input
          id={this.props.id}
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
