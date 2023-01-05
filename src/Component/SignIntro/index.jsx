import React, { Component } from 'react'

import LogoSign from '../LogoSign'
import Quotation from '../Quotation'


import './style.css'

export default class SignIntro extends Component {
  render() {
    return (
      <div className='signIntro'>
        <div>
        <LogoSign />
        <Quotation/>
        </div>
      </div>
    )
  }
}
