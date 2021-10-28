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

const clearCompleted = (state) => ({
	todos: state.todos.filter((todo) => !todo.iscompleted),
});

const getInactiveCount = (state) =>
	state.todos.filter((todo) => todo.iscompleted).length;

const filters = {
	All: () => true,
	Active: (todo) => !todo.iscompleted,
	Completed: (todo) => todo.iscompleted,
};

const setFilter = (filter, todos) => todos.filter(filters[filter]);

const getTodosCount = (data) => data.length;

const removeTodo = (todos, todo) => todos.filter((current) =>
	current.id !== todo.id);

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAll,
	clearCompleted,
	getInactiveCount,
	setFilter,
	getTodosCount,
	removeTodo,
};

export default TodoManager;
