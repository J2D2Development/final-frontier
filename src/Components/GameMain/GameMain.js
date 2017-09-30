import React from 'react';
import PropTypes from 'prop-types';

import { BattleScreen } from './BattleScreen/BattleScreen';
import { CharacterList } from './CharacterList/CharacterList';
import { NavBar } from './NavBar/NavBar';
import { WinLossDrawScreen } from './WinLossDrawScreen/WinLossDrawScreen';

import './game-main.css';

export const GameMain = ({characters, chooseCharacter, gameState, p1Character, p1Stats, computerCharacter, battle, resetGame, playAgain, scores, saveScoreState, winner}) => {
    const mainAnimationTiming = 500;

    return (
        <div className="wrapper-outer">
            <NavBar p1Stats={p1Stats} resetGame={resetGame} setScoreState={saveScoreState} />
            <section>
                {
                    gameState === 'ready' &&
                    <CharacterList characters={characters} 
                        chooseCharacter={chooseCharacter}
                        mainAnimationTiming={mainAnimationTiming}
                    />
                }
                {
                    gameState === 'p1Ready' &&
                    <BattleScreen mainAnimationTiming={mainAnimationTiming} 
                        p1Character={p1Character} 
                        computerCharacter={computerCharacter} 
                        battle={battle}
                    />
                }
                {
                    (gameState === 'Won' || 
                        gameState === 'Lost' || 
                        gameState === 'Draw'
                    ) &&
                    <WinLossDrawScreen gameState={gameState} 
                        mainAnimationTiming={mainAnimationTiming}
                        p1Stats={p1Stats}
                        playAgain={playAgain}
                        resetGame={resetGame}
                        saveScoreState={saveScoreState}
                        scores={scores}
                        winner={winner}
                    />
                }
            </section>
        </div>
    );
}

GameMain.propTypes = {
    characters: PropTypes.array.isRequired,
    chooseCharacter: PropTypes.func.isRequired,
    gameState: PropTypes.string,
    resetGame: PropTypes.func.isRequired
};