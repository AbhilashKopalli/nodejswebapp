import React, { Component } from 'react';

export default class Fun extends Component {
    onButtonClick = () =>{
        window.alert('Hi Abhi')
    }
    render() {
        return (
            <button onClick={this.onButtonClick}>
                Click me
            </button>
        )
    }
}