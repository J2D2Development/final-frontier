
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { GameMain } from './Components/GameMain/GameMain';
import { Welcome } from './Components/Welcome/Welcome';
import { HighScores } from './Components/HighScores/HighScores';

//import logo from './logo.svg';
import './base-styles.css';
import 'font-awesome/css/font-awesome.min.css';

import { characters, getRandomCharacter, zip } from './utilities/logic';


//to be loaded from db?
const testScores = [
	{initials: "Joe", score: 14}, {initials: "Ash", score: 99}, {initials: "QBT", score: 58}
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: characters,
			p1Character: {},
			p1Stats: { initials: '', score: 0 },
			computerCharacter: {},
			gameState: 'ready',
			scores: [],
			savingScore: false,
			winner: {}
		}
	}

	componentDidMount = () => {
		this.setState((prevState, props) => {
			return { scores: testScores };
		});
	}

	chooseCharacter = (char) => {
		const compCharacter = getRandomCharacter();
		this.setState((prevState, props) => {
			return { 
				p1Character: char,
				computerCharacter: compCharacter,
				gameState: 'p1Ready'
			}
		});
	}

	battle = (player, computer) => {
		//if computer picks same as player, tie
		if(player.class === computer.class) {
			this.handleDraw();
		} else {
			//initialize win variables
			let winner = computer;
			let won = false;

			//check if win vars need to be updated
			if(player.beats.includes(computer.class)) {
				winner = player;
				won = true;
			}
			this.finish(winner, won);
		}
	}

	handleDraw = () => {
		const p1Clone = Object.assign({}, this.state.p1Stats);
		p1Clone.score += 1;
		this.setState((prevState, props) => {
			return {
				gameState: 'Draw',
				p1Stats: p1Clone
			}
		});
	}

	finish = (winner, won) => {
		const p1Clone = Object.assign({}, this.state.p1Stats);

		if(won) {
			p1Clone.score += 3;
		}

		this.setState((prevState, props) => {
			return {
				gameState: won ? 'Won' : 'Lost',
				winner,
				p1Stats: p1Clone
			}
		}, () => {
			console.log('updated score:', this.state.p1Stats);
		});
	}

	setInitials = (evt) => {
		console.log(evt.target.value);
		const p1Clone = Object.assign({}, this.state.p1Stats);
		p1Clone.initials = evt.target.value;

		this.setState((prevState, props) => {
			return { p1Stats: p1Clone };
		});
	}

	saveScore = () => {
		const p1Clone = Object.assign({}, this.state.p1Stats);
		let updatedScores = [...this.state.scores];
		updatedScores.push(p1Clone);

		this.setState((prevState, props) => {
			return { scores: updatedScores }
		});
	}

	playAgain = () => {
		this.setState((prevState, props) => {
			return {
				p1Character: {},
				computerCharacter: {},
				gameState: 'ready',
				result: {},
				winner: {}
			}
		});
	}

	resetGame = () => {
		this.setState((prevState, props) => {
			return {
				p1Character: {},
				p1Stats: {initials: '', score: 0},
				computerCharacter: {},
				gameState: 'ready',
				result: {},
				winner: {}
			}
		});
	}

	render() {
		return (
			<div className="App">
					<Route exact path="/"
						render={()=><Welcome />}
					/>

					<Route exact path="/game"
						render={()=><GameMain 
							characters={this.state.characters}
							p1Character={this.state.p1Character}
							p1Stats={this.state.p1Stats}
							battle={this.battle}
							computerCharacter={this.state.computerCharacter}
							chooseCharacter={this.chooseCharacter}
							gameState={this.state.gameState}
							playAgain={this.playAgain}
							resetGame={this.resetGame}
							winner={this.state.winner}
						/>}
					/>

					<Route exact path="/high-scores" 
						render={()=><HighScores 
						scores={this.state.scores}
						setInitials={this.setInitials}
						saveScore={this.saveScore}
						savingScore={this.state.savingScore}
					/>}
					/>
			</div>
		);
	}
}

export default App;
