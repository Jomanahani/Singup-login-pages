import React, { Component } from 'react'

import SideBar from '../../Component/SideBar'
import User from '../../Component/User'

import './style.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <SideBar/>
        <main>
        <User />
        </main>
      </div>
    )
  }
}
