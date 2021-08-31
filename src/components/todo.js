import { React } from 'react';

const Todo = ({ id, text, iscompleted }) => <div key={ id }>
	<input
		type="checkbox"
		checked={ iscompleted }
	/>
	{ text } </div>;

export default Todo;
