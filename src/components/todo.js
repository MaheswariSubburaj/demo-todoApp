import { React } from 'react';
import context from '../core/context';

const Todo = (todo) => {
	const { id, text, iscompleted } = todo;

	return <div key={ id }>
		<span>
			<input
				type="checkbox"
				checked={ iscompleted }
				onChange={ () => context.actions.toggleTodo(todo) }
			/>
		</span>
		<span onClick={ () => context.actions.setEditing(todo) }>
			{ text }
		</span>
		<span>
			<button onClick={ () => context.actions.removeTodo(todo) }>
				X</button>
		</span>
	</div>;
};

export default Todo;
