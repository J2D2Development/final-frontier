import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HighScores = ({scores, setInitials, saveScore, savingScore}) => {
    let displayScores;
    if(scores.length > 0) {
        displayScores = scores
            .sort((s1, s2) => s1.score > s2.score ? -1 : 1)
            .map((score, index) => {
                return <li key={index}>{score.initials}: {score.score}</li>
            });
    }

    return(
        <div>
            <h1>Galactic Hall of Fame</h1>
            {
                scores.length > 0 ?
                <ul>
                    {displayScores}
                </ul>
                :
                <div>No High Scores Yet!</div>
            }
            {
                savingScore &&
                <div>
                    <input type="text" placeholder="Enter Your Initials"
                        onChange={(evt) => setInitials(evt)}
                    />
                    <i className="fa fa-check" 
                        aria-hidden="true"
                        onClick={saveScore}
                    ></i>
                </div>
            }
            <input type="button" value="Save My Score" />
            <Link to="/game">Back to game</Link>
        </div>
    );
}

HighScores.propTypes = {
    saveScore: PropTypes.func,
    savingScore: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    updateScoreHandler: PropTypes.func
};