import React, { Component } from '.react';
import Board from './board';
import ReactDOM from '.react-dom';
import './style.css';

class Intro extends Component {
    state = {
        renderView: 0
    };
    clickBtn = e => {
        this.setState({renderView: +e.target.value})
    };

    render() {
        return <Board />
    }
}