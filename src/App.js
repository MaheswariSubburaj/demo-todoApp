/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components';
import TaskManager from './services/taskManager';

const App = () => {
	useEffect(TaskManager.init2, []);

	return <div className="App">
		<div> {TodoPane()} </div>
	</div>;
};

export default App;
