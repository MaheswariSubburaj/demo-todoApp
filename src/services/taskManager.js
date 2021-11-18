import { rndString } from '@laufire/utils/random';
import context from '../core/context';

const getTask = (text) => ({
	id: rndString(context.config.idLength),
	text: text,

});

const init = () => context.actions.setTask([
	getTask('Task1'),
	getTask('Task2'),
	getTask('Task3'),

]);

const removeTask = (tasks, data) => tasks.filter((task) => task.id !== data.id);

const taskManager = () => ({
	init, removeTask,
});

const TaskManager = taskManager();

export default TaskManager;
