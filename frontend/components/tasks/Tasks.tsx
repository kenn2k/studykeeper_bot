"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useGetTasks } from "@/components/hooks/useForm";
import TaskItem from "@/components/tasks/TaskItem";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

interface ITaskItemProps extends ITaskForm {
	handleDelete: (id: string) => Promise<void>;
}

const Tasks = () => {
	const { data, isError, isPending } = useGetTasks();
	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: something happened</span>;
	}

	const handleDelete = async (id: string) => {
		try {
			await taskService.deleteTask(id);
			data.filter((task: ITaskForm) => task.id !== id);
		} catch (error) {
			console.error("Failed to delete the task:", error);
		}
	};
	return (
		<div>
			{data.map((task: ITaskItemProps) => (
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
