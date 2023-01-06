import React, { Component } from "react";

import LastPlayed from "../LastPlayed";
import Trophy from "../Trophy";
import Friends from "../Friends";

import "./style.css";

export default class InformatioSec extends Component {
  render() {
    return (
      <section className="infoSec">
        <LastPlayed />
        <Trophy />
        <Friends />
      </section>
    );
  }
}
