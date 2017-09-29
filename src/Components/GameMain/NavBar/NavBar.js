import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavBar = ({resetGame}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Logo</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a onClick={resetGame}>
                        Reset
                    </a>
                </li>
                <li>
                    <Link onClick={resetGame} to="/">
                        Quit
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

NavBar.propTypes = {
    resetGame: PropTypes.func.isRequired
}