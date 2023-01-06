import React, { Component } from "react";

import LastPlayed from "../LastPlayed";

import "./style.css";

export default class InformatioSec extends Component {
  render() {
    return (
      <section className="infoSec">
        <LastPlayed />
      </section>
    );
  }
}
