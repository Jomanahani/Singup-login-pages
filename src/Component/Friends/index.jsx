import React, { Component } from "react";

import SectionTitle from "../SectionTitle";
import Friendspic from "../../assetse/FRIENDS.png";

import './style.css'

export default class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <SectionTitle title="friends" />
        <img src={Friendspic} alt="Friends"/>
      </div>
    );
  }
}
