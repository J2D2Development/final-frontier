import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { NavBar } from '../GameMain/NavBar/NavBar';

import './high-scores.css';

import starfleet from '../../img/starfleet-logo.png';

export const HighScores = ({p1Stats, resetGame, resetScores, scores, setInitials, saveScore, savingScore}) => {
    let displayScores;
    if(scores.length > 0) {
        displayScores = scores
            .sort((s1, s2) => s1.score >= s2.score ? -1 : 1)
            .map((score, index) => {
                return (
                    <li key={index}>
                        <span>{score.initials}</span>
                        <span>{score.score}</span>
                    </li>
                );
            });
    }

    const allowSave = p1Stats.initials.length === 3;
    
    let saveError;
    if(!allowSave) {
        saveError = <div className="form-error">Please enter your initials (3 letters)</div>
    } else {
        saveError = <div></div>
    }

    return(
        <div className="full-screen hs-wrapper">
            <NavBar resetGame={resetGame} p1Stats={p1Stats} />
            {
                savingScore &&
                <div className="abs-top-left congrats">
                    <span>Congratulations!</span>
                    <i className="fa fa-thumbs-o-up"></i>
                </div>
            }
            <ReactCSSTransitionGroup
                transitionName="body"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeaveTimeout={500}
            >
                <div className="hs-inner-wrapper">
                    <div className="hs-header">
                        <img src={starfleet} alt="Starfleet Logo" />
                        <h1>Galactic Hall of Fame</h1>
                    </div>
                    {
                        scores.length > 0 ?
                        <ul>
                            {displayScores}
                        </ul>
                        :
                        <div className="no-scores">No High Scores Yet!</div>
                    }
                    {
                        savingScore &&
                        <div className="form-wrapper">
                            <form onSubmit={(evt) => saveScore(evt, allowSave)}>
                                <input type="text" placeholder="Enter Your Initials"
                                    maxLength="3" autoFocus
                                    onChange={(evt) => setInitials(evt)}
                                />
                                <input type="submit" value="Save" />
                            </form>
                            {saveError}
                        </div>
                    }
                    {
                        (!savingScore && scores.length > 0) &&
                        <input type="button" className="btn btn-fullwidth"
                            onClick={resetScores} value="Reset All"
                        />
                    }
                </div>
            </ReactCSSTransitionGroup>
        </div>
    );
}

HighScores.propTypes = {
    resetScores: PropTypes.func.isRequired,
    saveScore: PropTypes.func,
    savingScore: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    setInitials: PropTypes.func
};