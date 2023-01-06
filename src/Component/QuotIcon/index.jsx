import React, { Component } from "react";

import { FaQuoteLeft } from "react-icons/fa";

import "./style.css";

export default class QuotIcon extends Component {
  render() {
    return (
      <div className={this.props.login ? "logQuoteIco" : "QuoteIco"}>
        <FaQuoteLeft
          size="2rem"
          login={this.props.login}
          className={this.props.login ? "logQuoteIco" : "QuoteIco"}
        />
      </div>
    );
  }
}
