// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar/NavBar';

import './game-main.css';

export const GameMain = ({username}) => {
    return (
        <div className="wrapper-outer">
            <header>
                <NavBar username={username} />
            </header>
            <section>
                Game area here!
            </section>
            <footer>
                <div>
                    Boldly Going With a Little Help From React
                </div>
                <div>
                    <Link to="/high-scores">View High Scores</Link>
                </div>
            </footer>
        </div>
    );
}