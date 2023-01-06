import React, { Component } from "react";

import QuotIcon from '../QuotIcon'
import GamePicLogin from '../GamePicLogin'


import "./style.css";

export default class Quotation extends Component {
  render() {
    return (
      <div className={this.props.login?'quote logQuote' :'quote'}>
        <QuotIcon login={this.props.login}/>
        <p>
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <div className='outher'>
        <p>Hideo Kojima</p>
        <GamePicLogin login={this.props.login} />
        </div>
        <div className="buttomCorner"></div>
      </div>
    );
  }
}
