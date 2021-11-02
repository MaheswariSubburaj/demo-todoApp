/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import TodoPane from './components';
import context from './core/context';

const App = () => {
	console.log(context.state);

	return <div className="App">
		<div>{ TodoPane() }  </div>
	</div>;
};

export default App;
