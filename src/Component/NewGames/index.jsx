import React, { Component } from "react";

import SectionTitle from "../SectionTitle";
import game1 from "../../assetse/game1.png";
import game2 from "../../assetse/game2.png";
import game3 from "../../assetse/game3.png";

import "./style.css";

export default class NewGames extends Component {
  render() {
    return (
      <section className="NewGames">
        <SectionTitle title="NEW GAMES " />
        <div className="gameContaner " >
        <img src={game1} alt='game' />
        <img src={game2} alt='game' />
        <img src={game3} alt='game' className="last_game"/>
        </div>
      </section>
    );
  }
}
