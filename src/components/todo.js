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
		<span>{ text }</span>
		<span>
			<button onClick={ () => context.actions.toDoRemoval(todo) }>
				X</button>
		</span>
	</div>;
};

export default Todo;
