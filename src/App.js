// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GameMain } from './Components/GameMain/GameMain';
import { Welcome } from './Components/Welcome/Welcome';
import { HighScores } from './Components/HighScores/HighScores';

//import logo from './logo.svg';
import './base-styles.css';

type State = {
	scores: Array<Object>,
	username: String
}

//to be loaded from db?
const testScores = [
	{name: "Joe", total: 14}, {name: "Ash", total: 99}, {name: "Q*Bert", total: 58}
];

class App extends Component<State> {
	constructor() {
		super();
		this.state = {
			scores: [],
			username: ''
		}
	}

	componentDidMount = () => {
		this.setState((prevState, props) => {
			return { scores: testScores };
		});
	}

	setUsername = (username: String) => {
		console.log(username)
		this.setState((prevState, props) => {
			return { username };
		});
	}

	render() {
		return (
			<div className="App">
			<Route exact path="/"
				render={()=><Welcome username={this.state.username} setUsername={this.setUsername} />}
			/>
			<Route exact path="/game"
				render={()=><GameMain username={this.state.username} />}
			/>

			<Route exact path="/high-scores" 
					render={()=><HighScores 
					scores={this.state.scores}
				/>} 
			/>  
			</div>
		);
	}
}

export default App;
