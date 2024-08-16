"use client";

import React, { useEffect, useState } from "react";
import TaskItem from "@/components/tasks/TaskItem";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

interface ITaskItemProps extends ITaskForm {
	handleDelete: (id: string) => Promise<void>;
}

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const loadSbj = async () => {
			const response = await taskService.getTasks();
			setTasks(response.data);
		};
		loadSbj();
	}, []);

	const ifError = () => {
		if (!tasks) {
			return console.log("no one task found");
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await taskService.deleteTask(id);
			setTasks(tasks.filter((task: ITaskForm) => task.id !== id));
		} catch (error) {
			console.error("Failed to delete the task:", error);
		}
	};
	return (
		<div>
			{tasks.map((task: ITaskItemProps) => (
				<TaskItem
					key={task.id}
					note={task.note}
					task={task.task}
					topic={task.topic}
					date={task.date}
					teacher={task.teacher}
					id={task.id}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default Tasks;
