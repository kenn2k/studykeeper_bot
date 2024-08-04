"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

const Tasks = () => {
	const { register, handleSubmit, reset } = useForm();

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const res = await taskService.getTasks();
			setTasks(res.data);
		};

		fetchTasks();
	}, []);

	const handleTaskAdded = (newTask: any) => {
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	const onSubmit = async (data) => {
		try {
			const newTask = await taskService.createTask(data);
			handleTaskAdded(newTask);
			reset();
		} catch (error) {
			console.error("Failed to create task:", error);
		}
	};
	return (
		<>
			<form
				className="flex flex-col"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...register("topic")}
					placeholder="topic"
					required
				/>
				<input
					{...register("task")}
					placeholder="task"
					required
				/>
				<input
					{...register("note")}
					placeholder="note"
					required
				/>
				<textarea
					{...register("teacher")}
					placeholder="teacher"
					required
				/>
				<button type="submit">Add Task</button>
			</form>

			<ul className=" ">
				{tasks.map((task: ITaskForm) => (
					<li key={task.id}>
						<h3>{task.topic}</h3>
						<p>{task.teacher}</p>
						<h3>{task.note}</h3>
						<p>{task.task}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default Tasks;
