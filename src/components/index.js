import { React } from 'react';
import context from '../core/context';
import TextBox from './input';
import toggleAll from './toggleAlltodos';
import clearCompleted from './clearCompleted';
import filterBar from './filterbar';
import ActionButton from './actionbutton';
import todoList from './todoList';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'pink',
};

const TodoPane = () => <div style={ style }>
	<span> { toggleAll() }</span>
	<span> { TextBox() }</span>
	<span> { ActionButton() }</span>
	<div> Input: { context.state.input }</div>
	<div> Todos: { todoList() }</div>
	<div> { clearCompleted() } </div>
	<div> { filterBar() }</div>
</div>;

export default TodoPane;
