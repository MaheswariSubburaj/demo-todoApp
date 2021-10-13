import { React } from 'react';
import TodoManager from '../services/todoManager';
import filterButton from './filterButton';
import context from '../core/context';

const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];
	const isTodos = TodoManager.getTodosCount(context.state.todos) === 0;

	return isTodos
		? null
		: <div> { filters.map(filterButton) }</div>;
};

export default filterBar;
