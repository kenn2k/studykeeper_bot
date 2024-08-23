"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ITaskForm, IUpdTaskForm } from "@/types/types";
import { taskService } from "@/services/task";

//* @Get

const fetchTasks = async () => {
	const res = await taskService.getTasks();
	return res.data;
};

export const useGetTasks = () => {
	return useQuery({
		queryKey: ["get tasks"],
		queryFn: fetchTasks,
	});
};

//* @Post

const postTask = async (data: ITaskForm) => {
	const res = await taskService.createTask(data);
	return res.data;
};

export const useCreateTask = () => {
	const router = useRouter();
	const mutation = useMutation({
		mutationKey: ["create task"],
		mutationFn: postTask,
		onSuccess: () => {
			router.push("/tasks");
		},
		onError: (error) => {
			console.error("Помилка при створенні таски:", error);
		},
	});
	return mutation;
};

//* @Patch

const patchTask = async (id: string, data: IUpdTaskForm) => {
	const res = await taskService.updateTask(id, data);
	return res.data;
};

export const useEditTask = () => {
	const router = useRouter();
	const mutation = useMutation({
		mutationFn: ({ id, data }: { id: string; data: IUpdTaskForm }) =>
			patchTask(id, data),
		onSuccess: () => {
			router.push("/tasks");
		},
		onError: (error) => {
			console.error("Помилка при редагуванні таски:", error);
		},
	});
	return mutation;
};
