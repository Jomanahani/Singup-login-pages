import React, { Component } from 'react'

import google from '../../assetse/google.png'
import twitter from '../../assetse/twitter.png'
import linkedin from '../../assetse/linkedin.png'
import github from '../../assetse/github.png'

import './style.css'

export default class OtherAccounts extends Component {
  render() {
    return (
        <div className="links">
        <div>
          <img src={google} alt="google" className="gooogle" />
        </div>
        <div>
          <img src={twitter} alt="tweitter" className="tweitter" />
        </div>
        <div>
          <img src={linkedin} alt="linked" className="linked" />
        </div>
        <div>
          <img src={github} alt="github" className="github" />
        </div>
      </div>
    )
  }
}
