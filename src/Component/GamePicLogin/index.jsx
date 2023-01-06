import React, { Component } from 'react'

import GamPic from "../../assetse/game.png";

import './style.css'

export default class GamePicLogin extends Component {
  render() {
    return (
      <div className={this.props.login?'GamPic':'hide'}>
        <img src={GamPic} alt='GamPic' />
      </div>
    )
  }
}
