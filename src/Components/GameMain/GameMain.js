import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card } from '../General/Card';
import { Icon } from '../General/Icon';
import { NavBar } from './NavBar/NavBar';

import './game-main.css';

export const GameMain = ({characters, chooseCharacter, gameState, p1Character, p1Stats, computerCharacter, battle, resetGame, playAgain, winner}) => {
    const characterCards = characters.map((char, index) => {
        return <Icon key={index}
            character={char} 
            chooseCharacter={chooseCharacter} />
    });

    return (
        <div className="wrapper-outer">
            <header className="text-light">
                <NavBar resetGame={resetGame} />
            </header>
            <section>
                {
                    gameState === 'ready' &&
                    <div>
                        <h1>Choose Your Character!</h1>
                        <div className="wrapper-inner">
                            <div className="card-wrapper">{characterCards}</div>
                        </div>
                    </div>
                }
                {
                    gameState === 'p1Ready' &&
                    <div className="wrapper-inner">
                        <div className="wrapper-individual">
                            <h1>Your Character</h1>
                            <Card character={p1Character} />
                        </div>
                        <div className="flex-col-center">
                            <h3>Versus</h3>
                            <input type="button" onClick={() => battle(p1Character, computerCharacter)} value="Begin!" />
                        </div>
                        <div className="wrapper-individual">
                            <h1>Computer</h1>
                            <Card character={computerCharacter} />
                        </div>
                    </div>
                }
                {
                    (gameState === 'Won' || gameState === 'Lost') &&
                    <div className="wrapper-inner">
                        <div>
                            <h1>You {gameState} the Match</h1>
                            <h3>
                                {winner.name} was victorious.
                            </h3>
                            <div className="add-shadow italic padding-sm">
                                {winner.victoryText}
                            </div>
                            <input type="button" onClick={playAgain} value="Play Again?" />
                            <Link to="/high-scores">View High Scores</Link>
                        </div>
                    </div>
                }
                {
                    gameState === 'Draw' &&
                    <div className="wrapper-inner">
                        <div>
                            <h1>It's a Draw</h1>
                            <input type="button" onClick={playAgain} value="Play Again?" />
                            <Link to="/high-scores">View High Scores</Link>
                        </div>
                    </div>
                }
            </section>
            <footer className="padding-sm text-light">
                <div>
                    Boldly Going With a Little Help From React
                </div>
                <div>
                    Current Score: {p1Stats.score}
                </div>
            </footer>
        </div>
    );
}

GameMain.propTypes = {
    characters: PropTypes.array.isRequired,
    chooseCharacter: PropTypes.func.isRequired,
    gameState: PropTypes.string,
    resetGame: PropTypes.func.isRequired
};