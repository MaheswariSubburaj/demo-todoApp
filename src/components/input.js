/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context.js';

const getEnterKeyAction = () => (context.state.editing
	? 'editTodo'
	: 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterKeyAction()](),
	Escape: () => context.actions.setInput(''),
};

const TextBox = () =>

	<input
		value={ context.state.input }
		onChange={ (evt) =>
			context.actions.setInput(evt.target.value) }
		onKeyUp={ (evt) => {
			actionKeys[evt.code] && actionKeys[evt.code]();
		} }
	/>;

export default TextBox;
