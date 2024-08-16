"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { IAuthForm } from "@/types/types";
import { authService } from "@/services/auth";

const Login = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthForm>();

	const onSubmit = async (data: IAuthForm) => {
		try {
			const response = await authService.main("login", data);
			console.log("User logged in:", response.data);
			router.push("/tasks");
		} catch (error) {
			console.error("Log in error:", error);
		}
	};
	return (
		<div className="flex h-screen items-center justify-center">
			<form
				className="flex flex-col    px-4 py-6 gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className=" flex justify-between items-center border-b-2 py-2 border-[#C778DD]">
					<h1 className=" text-white font-bold text-2xl">Log In</h1>
					<Link
						href="/auth/register"
						className=" text-white border-2 rounded-md px-3 py-1 border-[#474747]"
					>
						Register
					</Link>
				</div>

				<div className="flex flex-col">
					<input
						className="w-full px-4 text-[#C778DD] outline-none bg-inherit border-2 rounded-md border-[#474747] placeholder:text-[#4C5151] py-2"
						type="email"
						id="email"
						placeholder="Email"
						{...register("email", { required: "Email is required" })}
					/>
					{errors.email && (
						<span className=" text-red-600 mt-3">{errors.email.message}</span>
					)}
				</div>
				<div className="flex flex-col">
					<input
						className="w-full px-4 bg-inherit text-[#C778DD] outline-none border-2 rounded-md placeholder:text-[#4C5151] border-[#4C5151] py-2"
						type="password"
						id="password"
						placeholder="Password"
						{...register("password", { required: "Password is required" })}
					/>
					{errors.password && (
						<span className=" text-red-600 mt-3">
							{errors.password.message}
						</span>
					)}
				</div>

				<button
					type="submit"
					className="bg-[#383838] border-[#C778DD] border-2 text-white rounded-md py-2 px-4 mt-4"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
