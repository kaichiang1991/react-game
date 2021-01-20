import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import Main from '../pages/Main'
import About from '../pages/About'

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path='/main' component={Main}/>
                    <Route path='/about' component={About}/>
                    <Redirect to='/about'/>
                </Switch>
            </div>
        )
    }
}
