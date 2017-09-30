import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const WinLossDrawScreen = ({gameState, mainAnimationTiming, p1Stats, playAgain, resetGame, saveScoreState, scores, winner}) => {
    let quitOption;
    let tenth = 0;
    if(scores.length > 0) {
        tenth = Math.min.apply(null, scores.map(scoreObj => scoreObj.score));
    } 
    const inTopTen = p1Stats.score > tenth;

    if(inTopTen) {
        quitOption = <Link to="/high-scores" className="btn" onClick={() => saveScoreState(true)}>Save Score</Link>
    } else {
        quitOption = <Link to="/" className="btn" onClick={resetGame}>Quit Game</Link>
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="body"
            transitionAppear={true}
            transitionAppearTimeout={mainAnimationTiming}
            transitionEnter={false}
            transitionLeaveTimeout={mainAnimationTiming}
        >
            <div className="wrapper-inner col">
                    {
                        (gameState === 'Won' || gameState === 'Lost') &&
                        <div className="wrapper-result">
                            <h1>
                                You {gameState} the Match
                            </h1>
                            <h3>
                                {winner.name} was victorious.
                            </h3>
                            <div className="add-shadow italic padding-sm margin-bottom-sm">
                                "{winner.victoryText}..."
                            </div>
                        </div>
                    }
                    {
                        gameState === 'Draw' &&
                        <div className="wrapper-result">
                            <h1>It's a Draw</h1>
                            <div className="add-shadow italic padding-sm margin-bottom-sm">
                                "The only winning game is not to play..."
                            </div>
                        </div>
                    }
                    <div className="margin-bottom-sm">
                        <input type="button" className="btn" onClick={playAgain} value="Play Again?" />
                        {quitOption}
                    </div>
                    {
                        inTopTen && 
                        <div>You've cracked the top 10 scores!  Click "Save Score" to enter your initials.</div>
                    }
            </div>
        </ReactCSSTransitionGroup>
    );
}

WinLossDrawScreen.propTypes = {
    gameState: PropTypes.string,
    mainAnimationTiming: PropTypes.number.isRequired,
    p1Stats: PropTypes.object,
    playAgain: PropTypes.func.isRequired,
    resetGame: PropTypes.func,
    saveScoreState: PropTypes.func,
    scores: PropTypes.array.isRequired,
    winner: PropTypes.object
};