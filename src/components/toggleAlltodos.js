import { React } from 'react';
import context from '../core/context';

const getActiveChecked = (data) =>
	data.filter((todo) => !todo.iscompleted).length;

const toggleAll = () => {
	const ischecked = getActiveChecked(context.state.todos) === 0;

	return (
		<input
			type="checkbox"
			checked={ ischecked }
			onChange={ () => context.actions.toggleAll(!ischecked) }
		/>
	);
};

export default toggleAll;
