import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({username}) => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Logo</Link>
                </li>
            </ul>
            <ul>
                <li>Welcome {username}!</li>
                <li>Reset</li>
                <li>Quit</li>
            </ul>
        </nav>
    );
}