"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITaskForm } from "@/types/types";
import { taskService } from "@/services/task";

const UpdateTask = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ITaskForm>();

	const { id } = useParams();

	const stringId = Array.isArray(id) ? id[0] : id;

	const onSubmit: SubmitHandler<ITaskForm> = async (data) => {
		if (stringId) {
			try {
				const date = new Date(data.date);

				if (isNaN(date.getTime())) {
					throw new Error("Invalid date");
				}

				const updatedData = { ...data, date: date };

				await taskService.updateTask(stringId, updatedData);
				router.push("/tasks");
			} catch (error) {
				console.error(error);
			}
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
							className="  text-[#C778DD] text-sm font-medium mb-2"
						>
							Оберіть предмет
						</label>
						<input
							{...register("topic", { required: true })}
							type="text"
							id="topic"
							placeholder="Математика"
							className="placeholder:text-sm rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
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
							className="text-[#C778DD] text-sm font-medium mb-2"
						>
							ПІБ викладача
						</label>
						<input
							{...register("teacher", { required: true })}
							type="text"
							id="teacher"
							placeholder="Гефтер С. Л."
							className="placeholder:text-sm rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
						/>
						{errors.teacher && (
							<span className="text-red-500">Ініціали викладача</span>
						)}
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="task"
							className="text-[#C778DD] text-sm font-medium mb-2"
						>
							Завдання
						</label>
						<textarea
							{...register("task")}
							id="task"
							placeholder="Зробити №12, №19, №20"
							className="placeholder:text-sm rounded-md p-4 border-2 border-gray-300 outline-none"
							rows={3}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="note"
							className="text-[#C778DD] text-sm font-medium mb-2"
						>
							Нотатка
						</label>
						<textarea
							{...register("note")}
							id="note"
							placeholder="Это задание лучше выполнить с помощью Excel"
							className="placeholder:text-sm rounded-md p-4 border-2 border-gray-300 outline-none"
							rows={2}
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="date"
							className="text-[#C778DD] text-sm font-medium mb-2"
						>
							Оберіть дату дедлайну
						</label>
						<input
							{...register("date", { required: true })}
							id="date"
							type="date"
							className="placeholder:text-sm  rounded-md px-4 py-3 border-2 border-gray-300 outline-none"
						/>
						{errors.date && <span className="text-red-500">Оберіть дату</span>}
					</div>

					<button
						type="submit"
						className="btn-3d  text-[#C778DD] rounded-md"
					>
						Редагувати
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateTask;
