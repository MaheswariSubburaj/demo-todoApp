/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context.js';

const actionKeys = {
	Enter: () => context.actions.addTodo(),
	Escape: () => context.actions.setInput(''),
};

const TextBox = () =>

	<input
		value={ context.state.input }
		onChange={ (evt) =>
			context.actions.setInput(evt.target.value) }
		onKeyUp={ (evt) => {
			console.log(actionKeys[evt.code]);
			actionKeys[evt.code] && actionKeys[evt.code]();
		} }
	/>;

export default TextBox;
