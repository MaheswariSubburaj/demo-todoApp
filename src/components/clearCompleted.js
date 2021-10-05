/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const clearCompleted = () => {
	const notCompleted
	= TodoManager.clearCompletedCount(context.state) === 0;

	return notCompleted
		? null
		: <button onClick={ () => context.actions.clearCompleted() }>
			clear completed</button>;
};

export default clearCompleted;
