import { React } from 'react';
import context from '../core/context';
import TextBox from './input';
import toggleAll from './toggleAlltodos';
import clearCompleted from './clearCompleted';
import filterBar from './filterbar';
import ActionButton from './actionbutton';
import todoList from './todoList';

const TodoPane = () => <div className="todoPane">
	<span> { toggleAll() }</span>
	<span> { TextBox() }</span>
	<span> { ActionButton() }</span>
	<div> Input: { context.state.input }</div>
	<div> Todos: { todoList() }</div>
	<div> { clearCompleted() } </div>
	<div> { filterBar() }</div>
</div>;

export default TodoPane;
