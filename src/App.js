
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
	{name: "Joe", total: 14}, {name: "Ash", total: 99}, {name: "Q*Bert", total: 58}
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: characters,
			p1Character: {},
			computerCharacter: {},
			gameState: 'ready', //ready, p1chosen, compChosen, battle, end, over
			battleText: [],
			scores: [],
			username: '',
			winner: {}
		}
	}

	componentDidMount = () => {
		this.setState((prevState, props) => {
			return { scores: testScores };
		});
	}

	setInitials = (username) => {
		this.setState((prevState, props) => {
			return { username };
		});
	}

	setGameState = (gs) => {
		this.setState((prevState, props) => {
			return { gameState: gs }
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
		}, () => {
			setTimeout(() => {
				this.battle(char, compCharacter);
			}, 5000);
		});
	}

	battle = (player, computer) => {
		const alternatingText = zip(player.name, player.battleText, computer.name, computer.battleText);
		let winner = player;
		let won = true;
		if(player.beats.indexOf(computer.class) === -1) {
			winner = computer;
			won = false;
		}

		this.setState((prevState, props) => {
			return {
				gameState: 'battle',
				battleText: alternatingText
			}
		}, () => {
			setTimeout(() => {
				this.finish(winner, won);
			}, 5000);
		});
	}

	finish = (winner, won) => {
		this.setState((prevState, props) => {
			return {
				gameState: won ? 'Won' : 'Lost',
				winner
			}
		});
	}

	resetGame = () => {
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
							battleText={this.state.battleText}
							computerCharacter={this.state.computerCharacter}
							chooseCharacter={this.chooseCharacter}
							gameState={this.state.gameState}
							resetGame={this.resetGame}
							winner={this.state.winner}
						/>}
					/>

					<Route exact path="/high-scores" 
						render={()=><HighScores 
						scores={this.state.scores}/>}
					/>
			</div>
		);
	}
}

export default App;
