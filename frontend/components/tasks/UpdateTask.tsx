"use client";

import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditTask } from "@/components/hooks/useForm";
import { ITaskForm, IUpdTaskForm } from "@/types/types";

const UpdateTask = () => {
	const { register, handleSubmit } = useForm<IUpdTaskForm>();

	const { id } = useParams();

	const { mutate } = useEditTask();

	const onSubmit: SubmitHandler<IUpdTaskForm> = (data) => {
		const filteredData = Object.fromEntries(
			Object.entries(data).filter(([key, value]) => value !== ""),
		);

		mutate({ id: id as string, data: filteredData });
	};

	return (
		<div className="p-[5%] h-screen">
			<div className="h-full flex items-center flex-col justify-center">
				<h1 className=" text-white text-xl mb-6">Редагування завдання</h1>
				<form
					className="bg-[#2C2C2C] text-sm shadow-lg rounded-md w-full max-w-md flex flex-col gap-5 p-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col">
						<label
							htmlFor="topic"
							className="  text-[#C778DD]  font-medium mb-2"
						>
							Оберіть предмет
						</label>
						<input
							{...register("topic")}
							type="text"
							id="topic"
							placeholder="Математика"
							className="placeholder:text-sm rounded-md px-3 py-2 border-2 border-gray-300 outline-none"
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="teacher"
							className="text-[#C778DD]  font-medium mb-2"
						>
							ПІБ викладача
						</label>
						<input
							{...register("teacher")}
							type="text"
							id="teacher"
							placeholder="Гефтер С. Л."
							className="placeholder:text-sm rounded-md px-3 py-2 border-2 border-gray-300 outline-none"
						/>
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
							rows={2}
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
							placeholder="Це завдання краще зробити за допомогою Exel"
							className="rounded-md px-3 py-2 border-2 border-gray-300 placeholder:text-xs outline-none"
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
							{...register("date")}
							id="date"
							type="date"
							className="rounded-md px-3 py-2 border-2 border-gray-300 placeholder:text-xs outline-none"
						/>
					</div>

					<button
						type="submit"
						className="btn-3d border-[#C778DD] bg-[#C778DD] self-center px-6 py-1.5 border-2  text-white rounded-md"
					>
						Редагувати
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateTask;
