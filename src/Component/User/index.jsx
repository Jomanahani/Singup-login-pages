import React, { Component } from 'react'
import Profile from '../../assetse/Profile.png'

import './style.css'

export default class User
 extends Component {
  render() {
    return (
      <div className='profile'>
        <div className='info'>
        <h2>Welcome back,</h2>
        <h2>Jenny!</h2>
        </div>
        <img src={Profile} alt='Profile'/>
      </div>
    )
  }
}
