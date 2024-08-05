"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

const AddTask = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ITaskForm>();

	useEffect(() => {
		const loadSbj = async () => {
			const data = await taskService.getTasks();
			console.log(data);
		};
		loadSbj();
	}, []);

	const onSubmit = async (data: ITaskForm) => {
		if (!Object.keys(errors).length) {
			const newTask: ITaskForm = {
				topic: data.topic,
				teacher: data.teacher,
				task: data.task,
				note: data.note,
				date: data.date,
				id: data.id,
			};

			await taskService.createTask(newTask);
			router.push("/");
		} else {
			console.log("Form has errors, cannot submit.");
		}
	};

	return (
		<div className="p-[5%] h-screen">
			<div className="h-full flex items-center justify-center">
				<form
					className="bg-[#2C2C2C] shadow-lg rounded-md w-full max-w-md flex flex-col gap-5 p-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col">
						<label
							htmlFor="topic"
							className="text-[#C778DD] font-medium mb-2"
						>
							Оберіть предмет
						</label>
						<input
							{...register("topic", { required: true })}
							type="text"
							id="topic"
							placeholder="Математика"
							className="rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
						/>
						{errors.topic && (
							<span className="text-red-500">
								Це поле не повинно бути пустим
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="teacher"
							className="text-[#C778DD] font-medium mb-2"
						>
							ПІБ викладача
						</label>
						<input
							{...register("teacher", { required: true })}
							type="text"
							id="teacher"
							placeholder="Гефтер С. Л."
							className="rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
						/>
						{errors.teacher && (
							<span className="text-red-500">Ініціали викладача</span>
						)}
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="task"
							className="text-[#C778DD] font-medium mb-2"
						>
							Завдання
						</label>
						<textarea
							{...register("task")}
							id="task"
							placeholder="Зробити №12, №19, №20"
							className="rounded-md p-4 border-2 border-gray-300 outline-none"
							rows={3}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="note"
							className="text-[#C778DD] font-medium mb-2"
						>
							Нотатка
						</label>
						<textarea
							{...register("note")}
							id="note"
							placeholder="Это задание лучше выполнить с помощью Excel"
							className="rounded-md p-4 border-2 border-gray-300 outline-none"
							rows={2}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="date"
							className="text-[#C778DD] font-medium mb-2"
						>
							Оберіть дату дедлайну
						</label>
						<input
							{...register("date", { required: true })}
							id="date"
							type="date"
							className="rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
						/>
						{errors.date && <span className="text-red-500">Оберіть дату</span>}
					</div>

					<button
						type="submit"
						className="btn-3d  text-[#C778DD] rounded-md"
					>
						Додати
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;
