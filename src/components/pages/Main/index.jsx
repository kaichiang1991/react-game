import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import Character from './Character'
import './index.css'

export default class Main extends Component {

    state = {
        lists: [
            {id: 'a', title: '人物Ａ', hp: 15, mp: 20, atk: 100, dfs: 200},
            {id: 'b', title: '人物B', hp: 20, mp: 30, atk: 100, dfs: 200},
        ]
    }

    render() {
        const {lists} = this.state
        const defaultList = lists[0]

        return (
            <div>
                {lists.map(list => <Link className='character' key={list.id} to={`/main/${list.id}/${list.title}/${list.hp}/${list.mp}`}>{list.title}</Link>)}
                <hr/>
                <Switch>
                    {lists.map(list => <Route key={'route_' + list.id} path={`/main/${list.id}/:title/:hp/:mp`} component={Character}/>)}
                    <Redirect to={`/main/${defaultList.id}/${defaultList.title}/${defaultList.hp}/${defaultList.mp}`}/>
                </Switch>
            </div>
        )
    }
}
