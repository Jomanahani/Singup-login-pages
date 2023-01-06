import React, { Component } from "react";

import SectionTitle from "../SectionTitle";

import "./style.css";

export default class LastPlayed extends Component {
  render() {
    return (
      <div className="lastplayed">
        <SectionTitle title="last played" />
      </div>
    );
  }
}
