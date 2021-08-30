import { React } from 'react';

const Todo = ({ id, text }) => <div key={ id }> { text } </div>;

export default Todo;
