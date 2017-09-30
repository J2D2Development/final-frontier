import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Icon } from '../../General/Icon';

export const CharacterList = ({characters, chooseCharacter, mainAnimationTiming}) => {
    const characterCards = characters.map((char, index) => {
        return <Icon key={index}
            character={char} 
            chooseCharacter={chooseCharacter} />
    });

    return (
        <ReactCSSTransitionGroup
            transitionName="body"
            transitionAppear={true}
            transitionAppearTimeout={mainAnimationTiming}
            transitionEnter={false}
            transitionLeaveTimeout={mainAnimationTiming}
        >
            <h1>Choose Your Character!</h1>
            <div className="wrapper-inner">
                <div className="card-wrapper">{characterCards}</div>
            </div>
        </ReactCSSTransitionGroup>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    chooseCharacter: PropTypes.func.isRequired,
    mainAnimationTiming: PropTypes.number.isRequired
};