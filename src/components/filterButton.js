import { React } from 'react';
import context from '../core/context';

const filterButton = (filter) => <span key={ filter }>

	<button
		className="addbutton"
		onClick={ () => context.actions.setFilter(filter) }
	>
		{filter}</button></span>;

export default filterButton;
