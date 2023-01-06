import React, { Component } from "react";

import SectionTitle from "../SectionTitle";
import Game from "../Game";
import game1 from "../../assetse/game1.png";
import game2 from "../../assetse/game2.png";
import game3 from "../../assetse/game3.png";

import "./style.css";

export default class NewGames extends Component {
  render() {
    return (
      <section className="NewGames">
        <SectionTitle title="NEW GAMES " />
        <div className="gameContaner">
          <Game img={game1} />
          <Game img={game2} />
          <Game img={game3} />
        </div>
      </section>
    );
  }
}
