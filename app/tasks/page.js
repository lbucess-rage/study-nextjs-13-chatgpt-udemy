import React from 'react';
import TaksList from '../components/TaskList.jsx';
import TaskForm from '../components/TaskForm.jsx';
import TaskFormCustom from '../components/TaskFormCustom.jsx';
export const dynamic = 'force-dynamic';
const TasksPage = () => {
	return (
		<div>
			{/* <TaskForm /> */}
			<TaskFormCustom />
			<TaksList />
		</div>
	);
};

export default TasksPage;
