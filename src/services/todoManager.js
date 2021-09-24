import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const addTodo = (state) => ({
	todos: state.todos.concat({ text: state.input,
		id: rndString(config.rndStringLength), iscompleted: false }),
	input: '',
});

const toggleTodo = (state, data) => ({
	todos: state.todos.map((todo) => (
		todo.id !== data.id
			? todo
			: { ...todo, iscompleted: !todo.iscompleted })),
});

const toggleAll = (state, ischecked) => ({
	todos: state.todos.map((todo) =>
		({ ...todo, iscompleted: ischecked })),
});

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAll,
};

export default TodoManager;
