import React, { Component } from "react";

import { FaQuoteLeft } from "react-icons/fa";

import "./style.css";

export default class Quotation extends Component {
  render() {
    return (
      <div className="quote">
        <FaQuoteLeft color="#00DAF7" size="2rem" />
        <p>
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p>Hideo Kojima</p>
        <div className="buttomCorner"></div>
      </div>
    );
  }
}
