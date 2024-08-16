import { format } from "date-fns";
import { BadgeX, Pencil } from "lucide-react";
import Link from "next/link";
import { ITaskForm } from "@/types/types";

interface ITaskItemProps extends ITaskForm {
	handleDelete: (id: string) => Promise<void>;
}

const TaskItem = ({
	note,
	topic,
	task,
	date,
	id,
	handleDelete,
}: ITaskItemProps) => {
	const formattedDate = format(new Date(date), "dd.MM");
	const currentDate = format(new Date(), "dd.MM");

	const isEndpointDate = currentDate === formattedDate;

	const isOverdue = currentDate > formattedDate;

	return (
		<>
			<h1 className=" mt-10  text-lg font-bold p-2 rounded-t-lg text-[#C778DD] bg-[#2C2C2C] inline-block items-center gap-4 ">
				{topic}
			</h1>
			<div className="h-full bg-[#2C2C2C] mb-10  rounded-r-lg p-4">
				<div
					className={`flex gap-2 ${
						isOverdue ? "justify-between" : "justify-end"
					} ${isEndpointDate ? "justify-between" : "justify-end"}`}
				>
					{isEndpointDate && (
						<h3 className="text-[#ECEFF4] bg-yellow-500  rounded-md px-1.5 py-1 text-[10px] font-bold">
							Останній день здачі
						</h3>
					)}

					{isOverdue && (
						<p className="text-[#ECEFF4] bg-red-900 rounded-md px-1.5 py-1 text-[10px] font-bold">
							Прострочено
						</p>
					)}
					<h2 className="text-right text-[#C778DD]">
						Зробити до: {formattedDate}
					</h2>
				</div>

				<div className="bg-[#ECEFF4] flex flex-col mt-4 rounded-md p-2 gap-4">
					<p className="text-sm font-bold flex flex-col">
						Завдання:{" "}
						<span className=" break-words text-xs font-normal">{task}</span>
					</p>
					<p className="text-sm font-bold flex flex-col">
						Примітка:
						<span className=" break-words text-xs font-normal">{note}</span>
					</p>
					<div className=" flex justify-end gap-4">
						<Link
							href={`/tasks/${id}`}
							className=" flex gap-2 bg-[#333333] text-[#C778DD] px-2 py-1 text-xs rounded-md items-center border border-[#333333]"
						>
							Редагувати
							<span>
								<Pencil size={14} />
							</span>
						</Link>
						<button
							onClick={() => handleDelete(id)}
							className=" flex gap-2 bg-[#333333] text-[#C778DD] px-2 py-1 text-xs rounded-md items-center border border-[#333333]"
						>
							Видалити
							<span>
								<BadgeX size={14} />
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskItem;
