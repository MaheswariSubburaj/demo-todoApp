import TodoManager from '../services/todoManager';
import TaskManger from '../services/taskManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
	input: '',
});

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

const setTask = ({ data }) => ({
	tasks: data,
});

const removeTask = ({ state, data }) => ({
	tasks: TaskManger.removeTask(state.tasks, data),
});

const addTaskTodo = ({ state, data }) => ({
	todos: TodoManager.addTodo(state.todos, data.text),
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
	setTask,
	removeTask,
	addTaskTodo,
};

export default actions;
