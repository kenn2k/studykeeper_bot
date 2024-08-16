"use client";

import Link from "next/link";
import { useAuth } from "@/components/hooks/useAuth";
import { Navbar } from "@/components/navbar/Navbar";

const Main = () => {
	const isAuthenticated = useAuth();

	return (
		<div className="h-[calc(100vh-71px)]">
			<header className="flex justify-between items-center p-[5%]">
				<h1 className="text-2xl text-white font-bold">Study Keeper</h1>
				<div>
					{!isAuthenticated ? (
						<Link
							href="/auth/login"
							className="text-[#C778DD] font-bold"
						>
							Log In
						</Link>
					) : (
						<Navbar />
					)}
				</div>
			</header>
			<main className="p-[5%] flex-col flex h-full gap-5 justify-center items-center">
				<p className="text-center text-xl mb-4 shadow-md text-purple-400">
					Welcome to Study Keeper! Your reliable assistant in organizing
					educational tasks.
				</p>
				<div className="bg-[#2C2C2C] px-3 shadow-md  py-5 w-full text-center text-[#C778DD]">
					{!isAuthenticated ? (
						<Link href="/auth/login">Обрати предмет</Link>
					) : (
						<Link href="/tasks">Обрати предмет</Link>
					)}
				</div>
				<div className="bg-[#2C2C2C] px-3 py-5 shadow-md shadow-[#2C2C2C]  w-full text-center text-[#C778DD]">
					{!isAuthenticated ? (
						<Link href="/auth/login">Додати завдання</Link>
					) : (
						<Link href="/tasks">Додати завдання</Link>
					)}
				</div>
				<div className="bg-[#2C2C2C] px-3 py-5 w-full shadow-md   text-center text-[#C778DD]">
					{!isAuthenticated ? (
						<Link href="/auth/login">Календар</Link>
					) : (
						<Link href="/tasks">Календар</Link>
					)}
				</div>
			</main>
		</div>
	);
};

export default Main;
