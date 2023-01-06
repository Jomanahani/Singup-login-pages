import React, { Component } from 'react'

import Game from '../../assetse/Game-two.png';
import Like from '../../assetse/Like.png';
import Setting from '../../assetse/Setting.png';
import Puzzle from '../../assetse/Puzzle.png';

import './style.css'

export default class SideBar extends Component {
  render() {
    return (
    <aside className="sidebar">
        <div className='icons'>
            <img src={Game} alt='logo3'/>
            <div>
            <img src={Like} alt='hareticon'/>
            <img src={Setting} alt='settings'/>
            <img src={Puzzle} alt='Puzzle'/>
            </div>
        </div>
        <div className='sideborder'></div>
    </aside>
    )
  }
}
