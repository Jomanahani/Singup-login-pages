import React, { Component } from "react";

import logo from "../../assetse/logo.png";

import "./style.css";

export default class LogoSign extends Component {
  render() {
    return (
      <div className="logo1">
        <img src={logo} alt="logo" />
        <p>Gamers</p>
      </div>
    );
  }
}
