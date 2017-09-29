import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavBar = ({resetGame}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/high-scores" className="padding-sm">
                        Hall of Fame
                    </Link>
                </li>
                <li>
                    <Link onClick={resetGame} to="/" className="padding-sm">
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