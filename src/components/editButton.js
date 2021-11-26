import { React } from 'react';
import context from '../core/context';

const EditButton = () => <div>

	<button
		className="addbutton"
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.editTodo() }
	>Edit</button>
</div>;

export default EditButton;
