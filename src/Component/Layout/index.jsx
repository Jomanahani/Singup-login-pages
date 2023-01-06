import React, { Component } from "react";
import FormSide from "../FormSide/index";
import IntroSide from "../IntroSide/index";

import "./style.css";

export default class Layout extends Component {
  render() {
    return <div className="page">{this.props.children}</div>;
  }
}
