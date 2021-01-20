import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    state = {
        title: '遊戲標題'
    }
    render() {
        const {title} = this.state

        return (
            <div>
                <h1 className='title'>{title}</h1>
                <hr/>
            </div>
        )
    }
}
