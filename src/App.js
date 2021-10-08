/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import TextBox from './components/input';
import AddButton from './components/addbutton';
import toggleAll from './components/toggleAlltodos';
import clearCompleted from './components/clearCompleted';
import filterBar from './components/filterbar';
import todoList from './components/todoList';

const App = () => {
	console.log(context.state);

	return <div className="App">
		<div> { toggleAll() }</div>
		<div> { TextBox() }</div>
		<div> { AddButton() }</div>
		<div> Input: { context.state.input }</div>
		<div> Todos: { todoList() }</div>
		<div> { clearCompleted() } </div>
		<div> { filterBar() }</div>
	</div>;
};

export default App;
