// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonBlock } from '../General/ButtonBlock';
import { InputField } from '../General/InputField';

import '../../base-styles.css'
import './welcome.css';

export const Welcome = ({username, setUsername})=> {
    return (
        <div className="full-screen flex-center dark-bg text-lg">
            <div className="welcome">
                <h1>Welcome to The Final Frontier</h1>
                <h4>It's a Battle Royale Out Amongst the Stars!</h4>
                
                <InputField val={username} setVal={setUsername} 
                    placeholder="Enter Your Name" shouldFocus={true}
                />
                
                {username &&
                    <Link to="/game">
                        <ButtonBlock val="Submit and Start Game" />
                    </Link>
                }
            </div>
        </div>
    );
}