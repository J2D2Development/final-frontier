import React from 'react';

export const HighScores = ({scores}) => {
    let displayScores;
    if(scores.length > 0) {
        displayScores = scores.map((score, index) => {
            return <li key={index}>{score.name}: {score.total}</li>
        });
    }

    return(
        <div>
            <h1>High Scores Here!</h1>
            <ul>
                {scores.length > 0 ? displayScores : ''}
            </ul>
        </div>
    );
}