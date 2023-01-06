import React, { Component } from "react";

import "./style.css";

export default class SectionTitle extends Component {
  render() {
    return <h4 className="SectionTitle">{this.props.title}</h4>;
  }
}
