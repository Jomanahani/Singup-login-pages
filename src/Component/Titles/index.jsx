import React, { Component } from 'react'
import './style.css'

export default class Title extends Component {
  render() {
    return (
      <div className='titles'>
        <h2>{this.props.title}</h2>
        <p>{this.props.supTitle}</p>
      </div>
    )
  }
}
