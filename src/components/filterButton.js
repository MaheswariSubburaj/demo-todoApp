import { React } from 'react';
import context from '../core/context';

const filterButton = (filter) => <span key={ filter }>
	<button onClick={ () => context.actions.setFilter(filter) }>
		{filter}</button></span>;

export default filterButton;
