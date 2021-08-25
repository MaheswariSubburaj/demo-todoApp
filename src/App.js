/* eslint-disable no-console */
import { React } from 'react';
import './App.css';
import context from './core/context';
import TextBox from './components/input';
import AddButton from './components/addbutton';

const App = () => {
	console.log(context.state);

	return <div className="App">
		<div> { TextBox() }</div>
		<div> { AddButton() }</div>
		<div> Input: { context.state.input }</div>
		<div> Todo: { context.state.todo }</div>
	</div>;
};

export default App;
