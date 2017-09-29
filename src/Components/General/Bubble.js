import React from 'react';
import PropTypes from 'prop-types';

import './bubble.css';

export const Bubble = ({character, phrase}) => {
    return (
        <div className="bubble-wrap">
            <div>{character}</div>
            <div>{phrase}</div>
        </div>
    );
}

Bubble.propTypes = {
    character: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired
};