import React, { Component } from "react";

import { FcGoogle } from "react-icons/fc";

import "./style.css";

export default class GoogleBut extends Component {
  render() {
    return (
      <button className="google">
        <FcGoogle size="1.5rem" />
        <p>login</p>
      </button>
    );
  }
}
