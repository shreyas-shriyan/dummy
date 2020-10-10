import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <input placeholder="username" />
                <input placeholder="password" />
                <button>Submit</button>
            </div>
        )
    }
}
