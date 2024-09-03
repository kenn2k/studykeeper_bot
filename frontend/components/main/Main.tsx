"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";

const Main = () => {
	return (
		<div className="h-[calc(100vh-73.38px)]">
			<header className="flex justify-between items-center p-[5%]">
				<h1 className="text-2xl flex gap-3 items-center text-white font-bold">
					Study Keeper{" "}
					<span>
						<GraduationCap size={28} />
					</span>
				</h1>

				<Navbar />
			</header>
			<main className="p-[5%] flex-col flex h-full gap-5 justify-center  items-center">
				<p className="text-center rounded-md text-xl mb-4 shadow-md text-purple-400">
					З Study Keeper ти завжди в курсі своїх завдань. <br />
					Додавай, плануй, виконуй!
				</p>
				<div className="bg-[#2C2C2C] rounded-md   font-bold px-3 shadow-md  py-5 w-full text-center text-[#C778DD]">
					<Link href="/tasks">Обрати предмет</Link>
				</div>
				<div className="bg-[#2C2C2C] px-3 rounded-md py-5 shadow-md shadow-[#2C2C2C]  w-full text-center text-[#C778DD]">
					<Link href="/tasks/add-task">Додати завдання</Link>
				</div>
				<div className="bg-[#2C2C2C] px-3 py-5 rounded-md  w-full shadow-md   text-center text-[#C778DD]">
					<Link href="/tasks/calendar">Календар</Link>
				</div>
			</main>
		</div>
	);
};

export default Main;
