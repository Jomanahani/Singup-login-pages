import React, { Component } from "react";

export default class Password extends Component {
  render() {
    return (
      <div className="formItem">
        <label>{this.props.label}</label>
        <input id="password" type="text" placeholder={this.props.value} onChange={this.handleChangeInput}/>
      </div>
    );
  }
}
