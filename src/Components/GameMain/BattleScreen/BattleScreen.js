import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Card } from '../../General/Card';

export const BattleScreen = ({mainAnimationTiming, p1Character, computerCharacter, battle}) => {
    return (
        <div className="wrapper-inner">
            <ReactCSSTransitionGroup
                transitionName="playerChar"
                transitionAppear={true}
                transitionAppearTimeout={mainAnimationTiming}
                transitionEnter={false}
                transitionLeaveTimeout={mainAnimationTiming}
            >
                <div className="wrapper-individual">
                    <h1>You Selected</h1>
                    <Card character={p1Character} />
                </div>
            </ReactCSSTransitionGroup>
            <div className="flex-col-center">
                <ReactCSSTransitionGroup
                    transitionName="scale"
                    transitionAppear={true}
                    transitionAppearTimeout={mainAnimationTiming}
                    transitionEnter={false}
                    transitionLeaveTimeout={mainAnimationTiming}
                >
                    <input type="button" className="btn" onClick={() => battle(p1Character, computerCharacter)} value="Begin!" />
                </ReactCSSTransitionGroup>
            </div>
            <ReactCSSTransitionGroup
                transitionName="compChar"
                transitionAppear={true}
                transitionAppearTimeout={mainAnimationTiming}
                transitionEnter={false}
                transitionLeaveTimeout={mainAnimationTiming}
            >
                <div className="wrapper-individual">
                    <h1>Computer Selected</h1>
                    <Card character={computerCharacter} />
                </div>
            </ReactCSSTransitionGroup>
        </div>
    );
}

BattleScreen.propTypes = {
    battle: PropTypes.func.isRequired,
    computerCharacter: PropTypes.object.isRequired,
    mainAnimationTiming: PropTypes.number.isRequired,
    p1Character: PropTypes.object.isRequired
};