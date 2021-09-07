import TodoManager from '../services/todoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) =>
	TodoManager.addTodo(state);

const toggleTodo = ({ state, data }) =>
	TodoManager.toggleTodo(state, data);

const toggleAll = ({ state, ischecked }) =>
	TodoManager.toggleAll(state, ischecked);

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	toggleAll,
};

export default actions;
