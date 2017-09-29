import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

export const Card = ({character}) => {
    return (
        <div className="card card-full">
            <div className="header">{character.name}</div>
            <div className="image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="footer add-shadow">{character.battleText}</div>
        </div>
    );
}

Card.propTypes = {
    character: PropTypes.object.isRequired
};