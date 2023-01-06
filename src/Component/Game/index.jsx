import React, { Component } from 'react'

import './style.css'

export default class Game extends Component {
  render() {
    return (
      <div className='game'>
        <img src={this.props.img} alt='this.props.img'/>
      </div>
    )
  }
}
