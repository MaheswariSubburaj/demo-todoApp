import React from 'react';
import context from '../../core/context';
import task from './task';

const TaskList = () => {
	const { tasks } = context.state;

	return (
		<div>
			{tasks.map(task)}
		</div>
	);
};

export default TaskList;
