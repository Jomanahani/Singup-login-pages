import React, { Component } from "react";

import SectionTitle from "../SectionTitle";

import "./style.css";
import play1 from '../../assetse/play1.png'
import play2 from '../../assetse/play2.png'
import play3 from '../../assetse/play3.png'
import play4 from '../../assetse/play4.png'
export default class LastPlayed extends Component {
  render() {
    return (
      <div className="last_played">
        <SectionTitle title="last played" />
        <div className="play">
      <img src={play1} alt="gameImg" />
      <p >Hogwarts Legacy 50%</p>
    </div>

    <div className="play">
      <img src={play2} alt="gameImg"/>
      <p>God Of War: Ragnarök 72.5%</p>
    </div>

    <div className="play">
      <img src={play3} alt="gameImg" />
      <p>Crash Bandicoot N. Sane Trilogy 34%</p>
    </div>

    <div className="play">
      <img src={play4} alt="gameImg"/>
      <p>Dying Light 2 Stay Human 100%</p>
    </div>
      </div>
    );
  }
}
