/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components';
import TaskPane from './components/taskPane';
import TaskManager from './services/taskManager';

const App = () => {
	useEffect(TaskManager.init, []);

	return (
		<div className="App">
			 {TodoPane()}
			 {TaskPane()}</div>
	);
};

export default App;
