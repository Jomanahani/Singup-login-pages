import React, { Component } from "react";

import SideBar from "../../Component/SideBar";
import User from "../../Component/User";
import NewGames from "../../Component/NewGames";
import InformatioSec from "../../Component/InformatioSec";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideBar />
        <main className="main">
          <User logout={this.props.logout} />
          <NewGames />
          <InformatioSec />
        </main>
      </div>
    );
  }
}
