import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) =>
	TodoManager.addTodo(state);

const toggleTodo = ({ state, data }) =>
	TodoManager.toggleTodo(state, data);

const toggleAll = ({ state, data }) =>
	TodoManager.toggleAll(state, data);

const clearCompleted = ({ state }) =>
	TodoManager.clearCompleted(state);

const setFilter = ({ data }) => ({
	filter: data,
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.removeTodo(state.todos, data),
});

const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAll,
	clearCompleted,
	setFilter,
	removeTodo,
	setEditing,
	editTodo,
};

export default actions;
