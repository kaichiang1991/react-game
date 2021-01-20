import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'

export default class SideNav extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="side-nav">
                <NavLink {...this.props}/>
            </div>
        )
    }
}