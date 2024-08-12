"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className=" fixed top-0 right-0 p-[5%] z-50">
			<div
				className="flex flex-col justify-around w-8 h-8 cursor-pointer"
				onClick={toggleMenu}
			>
				<div
					className={`h-1 z-10 bg-[#C778DD] transition-transform duration-300 ${
						isOpen ? "rotate-45 translate-y-3" : ""
					}`}
				></div>
				<div
					className={`h-1 z-10 bg-[#C778DD] transition-opacity duration-300 ${
						isOpen ? "opacity-0" : ""
					}`}
				></div>
				<div
					className={`h-1 z-10 bg-[#C778DD] transition-transform duration-300 ${
						isOpen ? "-rotate-45 -translate-y-2.5" : ""
					}`}
				></div>
			</div>
			<div
				className={`fixed top-0 right-0 bg-[#ECEFF4] h-full  w-64 transition-transform duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<nav className=" flex justify-center flex-col gap-4 mt-20 items-center">
					<Link
						href="/tasks"
						className="block text-xl p-4 text-[#C778DD]"
					>
						Обрати предмет
					</Link>
					<Link
						href="/tasks/add-task"
						className="block text-xl p-4 text-[#C778DD]"
					>
						Додати завдання
					</Link>

					<Link
						href="/tasks/calendar"
						className="block text-xl p-4 text-[#C778DD]"
					>
						Календар
					</Link>
				</nav>
			</div>
		</header>
	);
};
