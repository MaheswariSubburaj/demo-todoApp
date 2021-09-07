/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import TextBox from './components/input';
import AddButton from './components/addbutton';
import Todo from './components/todo';
import toggleAll from './components/toggleAlltodos';

const App = () => {
	console.log(context.state);

	return <div className="App">
		<div> { toggleAll() }</div>
		<div> { TextBox() }</div>
		<div> { AddButton() }</div>
		<div> Input: { context.state.input }</div>
		<div> Todo: { context.state.todos.map(Todo) }</div>
	</div>;
};

export default App;
