import { rndString } from '@laufire/utils/random';
import config from './config';

const setInput = ({ data }) => ({
	input: data,
});
const addTodo = ({ state }) => ({
	todo: state.todo.concat({ text: state.input,
		id: rndString(config.rndStringLength) }),
	input: '',
});

const actions = {
	setInput,
	addTodo,
};

export default actions;
