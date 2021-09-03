import { React } from 'react';
import context from '../core/context';

const Todo = (todo) => {
	const { id, text, iscompleted } = todo;

	return <div key={ id }>
		<input
			type="checkbox"
			checked={ iscompleted }
			onChange={ () => context.actions.toggleTodo(todo) }
		/>
		{ text } </div>;
};

export default Todo;
