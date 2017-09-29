import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

export const Icon = ({character, chooseCharacter}) => {
    return (
        <div className="card card-icon" 
            onClick={() => chooseCharacter(character)}
        >
            <div className="header">{character.name}</div>
            <div className="image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="footer">{character.class}</div>
        </div>
    );
}

Icon.propTypes = {
    character: PropTypes.object.isRequired,
    chooseCharacter: PropTypes.func.isRequired
};