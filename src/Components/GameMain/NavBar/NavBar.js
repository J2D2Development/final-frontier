import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './navbar.css';

export const NavBar = ({p1Stats, resetGame, setScoreState}) => {
    return(
        <nav>
            <ReactCSSTransitionGroup
                transitionName="menu-left"
                transitionAppear={true}
                transitionAppearTimeout={900}
                transitionEnter={false}
                transitionLeaveTimeout={900}
            >
                <ul className="flex-start">
                    <span>Current Score: {p1Stats.score}</span>
                </ul>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionName="menu-right"
                transitionAppear={true}
                transitionAppearTimeout={900}
                transitionEnter={false}
                transitionLeaveTimeout={900}
            >
                <ul className="text-md">
                    {setScoreState && 
                        <li>
                            <Link to="/high-scores" 
                                onClick={() => setScoreState(false)} 
                                className="padding-sm hover-ul"
                                title="High Scores"
                            >
                                <i className="fa fa-list-ol"></i>
                            </Link>
                        </li>
                    }
                    <li>
                        <Link to="/game" className="padding-sm hover-ul" title="Back to Game">
                            <i className="fa fa-reply"></i>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={resetGame} to="/" className="padding-sm hover-ul" title="Quit Game">
                            <i className="fa fa-ban"></i>
                        </Link>
                    </li>
                </ul>
            </ReactCSSTransitionGroup>
        </nav>
    );
}

NavBar.propTypes = {
    p1Stats: PropTypes.object.isRequired,
    setScoreState: PropTypes.func,
    resetGame: PropTypes.func.isRequired
}