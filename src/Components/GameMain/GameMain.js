import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Bubble } from '../General/Bubble';
import { Card } from '../General/Card';
import { Icon } from '../General/Icon';
import { NavBar } from './NavBar/NavBar';

import './game-main.css';

export const GameMain = ({characters, chooseCharacter, gameState, p1Character, computerCharacter, battleText, resetGame, winner}) => {
    const characterCards = characters.map((char, index) => {
        return <Icon key={index}
            character={char} 
            chooseCharacter={chooseCharacter} />
    });

    const battleBubbles = battleText.map((text, index) => {
        return <Bubble key={index}
            character={text.name}
            phrase={text.text} />
    });

    return (
        <div className="wrapper-outer">
            <header>
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
                    (gameState === 'p1Ready' || gameState === 'battle') &&
                    <div className="wrapper-inner">
                        <div>
                            <h1>Your Character</h1>
                            <Card character={p1Character} />
                        </div>
                        {
                            gameState === 'battle' &&
                            <div className="wrapper-battle">
                                {battleBubbles}
                            </div>
                        }
                        <div>
                            <h1>Computer</h1>
                            <Card character={computerCharacter} />
                        </div>
                    </div>
                }
                {
                    (gameState === 'Won' || gameState === 'Lost') &&
                    <div className="wrapper-inner">
                        <div>
                            <h1>You {gameState} the Match!</h1>
                            <h3>{winner.victoryText}</h3>
                            <Card character={winner} />
                        </div>
                    </div>
                }
            </section>
            <footer>
                <div>
                    Boldly Going With a Little Help From React
                </div>
                <div>
                    <Link to="/high-scores">View High Scores</Link>
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