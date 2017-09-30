import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { spaceCanvas } from '../../utilities/space-canvas';

import './welcome.css';

export class Welcome extends Component {

    componentDidMount = () => {
        spaceCanvas('space');
    }

    render() {
        return (
            <div className="full-screen flex-center text-light text-lg">
                <canvas id="space"></canvas>
                <div className="welcome">
                    <h1>Welcome to The Final Frontier</h1>
                    <h4>It's a Battle Royale Out Amongst the Stars!</h4>
                    <Link to="/game">
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                        Play
                    </Link>
                </div>
            </div>
        );
    }
}