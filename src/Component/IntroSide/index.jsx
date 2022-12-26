import React, { Component } from 'react'
import './style.css'

export default class IntroSide extends Component {
  render() {
    return (
      <div className='introSide'>
        {this.props.children}
      </div>
    )
  }
}
