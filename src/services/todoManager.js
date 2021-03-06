/* eslint-disable function-paren-newline */
import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const addTodo = (todos, input) => todos.concat({
	text: input,
	id: rndString(config.rndStringLength),
	iscompleted: false,
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

const editTodo = (todos, editing, text) => todos.map((todo) =>
	(todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		}));

const TodoManager = {
	addTodo,
	toggleTodo,
	toggleAll,
	clearCompleted,
	getInactiveCount,
	setFilter,
	getTodosCount,
	removeTodo,
	editTodo,
};

export default TodoManager;
