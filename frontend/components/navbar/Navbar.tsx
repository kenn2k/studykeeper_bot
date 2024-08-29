"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/auth";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const isAuthenticated = useAuth();
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = async () => {
		await authService.logout();
		router.push("/auth/login");
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
				<nav className=" px-4 flex justify-center flex-col text-lg font-bold gap-4 mt-20  items-start">
					<Link
						href="/"
						className="block self-center  p-4 text-[#C778DD]"
					>
						<GraduationCap size={35} />
					</Link>
					<Link
						href="/tasks"
						className="block  p-4 text-[#C778DD]"
					>
						Обрати предмет
					</Link>
					<Link
						href="/tasks/add-task"
						className="block  p-4 text-[#C778DD]"
					>
						Додати завдання
					</Link>

					<Link
						href="/tasks/calendar"
						className="block  p-4 text-[#C778DD]"
					>
						Календар
					</Link>
					{isAuthenticated ? (
						<button
							onClick={handleLogout}
							className=" p-4 text-[#C778DD]"
						>
							Вийти
						</button>
					) : (
						<p>{""}</p>
					)}
				</nav>
			</div>
		</header>
	);
};
