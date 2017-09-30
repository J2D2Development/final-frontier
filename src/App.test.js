import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

describe('Basic functionality tests', () => {
	beforeEach(() => {
		const view = ReactTestUtils.renderIntoDocument(<DailyView />)
	});
	
	it('Updates initials', () => {
		console.log(view);
	});
});
