import React, { Component } from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import SideNav from './components/SideNav'

export default class App extends Component {

  state = {
    leftLink: ['Main', 'About']
  }

  render() {
    const {leftLink} = this.state

    return (
      <div id='game-container'>
        <Header/>
        <div className='content-container'>
          <div className='side-bar'>
            {leftLink.map(link => <SideNav key={link} to={'/' + link.toLowerCase()}>{link}</SideNav>)}     
          </div>
          <Content/>     
        </div>
      </div>
    )
  }
}
