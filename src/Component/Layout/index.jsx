import React, { Component } from "react";

import "./style.css";

export default class Layout extends Component {
  render() {
    return <div className="page">{this.props.children}</div>;
  }
}
