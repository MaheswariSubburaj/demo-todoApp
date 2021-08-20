import { React } from 'react';
import context from '../core/context.js';

const TextBox = () =>
	<div className="input">
		<input
			onChange={ (evt) =>
				context.actions.setInput(evt.target.value) }
			type="text"
		/>
	</div>;

export default TextBox;
