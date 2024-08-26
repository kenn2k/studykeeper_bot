"use client";

import { useGetTasks } from "@/components/hooks/useForm";
import TaskItem from "@/components/tasks/TaskItem";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

interface ITaskItemProps extends ITaskForm {
	handleDelete: (id: string) => Promise<void>;
}

const Tasks = () => {
	const { data, isError } = useGetTasks();

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
		<div className=" ">
			{data && data.length > 0 ? (
				data.map((task: ITaskItemProps) => (
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
				))
			) : (
				<div className=" bg-[#2C2C2C] flex mt-20 p-4 text-lg items-center justify-center">
					<p className="text-[#C778DD]">Наразі у вас немає завдань.</p>
				</div>
			)}
		</div>
	);
};

export default Tasks;
