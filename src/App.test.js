import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

describe('Basic functionality tests', () => {
	beforeEach(() => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
	
	it('Updates initials', () => {

	})
})
