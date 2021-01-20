import React, { Component } from 'react'

export default class Character extends Component {
    render() {
        console.log('char', this.props)
        const {params} = this.props.match

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            {params.title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>HP: {params.hp}</td></tr>
                    <tr><td>MP: {params.mp}</td></tr>
                </tbody>
            </table>

        )
    }
}
