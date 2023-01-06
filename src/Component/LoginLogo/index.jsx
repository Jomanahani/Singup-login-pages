import React, { Component } from 'react'

import logo2 from '../../assetse/logo2.png'

import './style.css'

export default class LoginLogo extends Component {
  render() {
    return (
      <div className='loginlogo'>
        <img src={logo2} alt='logo'/>
        <h1>Gamers</h1>
      </div>
    )
  }
}
