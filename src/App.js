/* eslint-disable no-console */
import { React } from 'react';
import './App.css';
import context from './core/context';
import TextBox from './components/input';

const App = () => {
	console.log(context.state);

	return <div className="App">
		<div> { TextBox() }</div>
	</div>;
};

export default App;
