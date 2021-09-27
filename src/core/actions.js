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

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAll,
	clearCompleted,
};

export default actions;
