import React, { Component } from 'react'

import LogoSign from '../LogoSign'
import Quotation from '../Quotation'
import GamePicLogin from '../GamePicLogin'

import './style.css'

export default class SignIntro extends Component {
  render() {
    return (
      <div className='signIntro'>
        <div>
        <LogoSign />
        <Quotation/>
        <GamePicLogin/>
        </div>
      </div>
    )
  }
}
