import React, { Component } from 'react'

import Quotation from '../Quotation'
import LoginLogo from '../LoginLogo'

export default class LoginIntro extends Component {
  render() {
    return (
      <div className='loginIntro'>
        <LoginLogo/>
        <Quotation login='true'/>
      </div>
    )
  }
}
