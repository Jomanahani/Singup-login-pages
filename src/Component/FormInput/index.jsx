import React, { Component } from "react";
import './style.css'
export default class FormInput extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
