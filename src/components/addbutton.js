import { React } from 'react';
import context from '../core/context';

const AddButton = () => <div>

	<button
		onClick={ () => context.actions.addTodo() }
	>Add</button>
</div>;

export default AddButton;
