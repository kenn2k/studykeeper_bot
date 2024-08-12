"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { IAuthForm } from "@/types/types";
import { authService } from "@/services/auth";

const Register = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthForm>();

	const onSubmit = async (data: IAuthForm) => {
		try {
			const response = await authService.main("register", data);
			console.log("User registered:", response.data);
			router.push("/");
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<form
				className="flex flex-col    px-4 py-6 gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className=" flex justify-between items-center border-b-2 border-[#C778DD] py-2">
					<h1 className=" text-white font-bold text-2xl">Register</h1>
					<Link
						href="/auth/login"
						className=" text-white border-2 rounded-md px-3 py-1 border-[#474747]"
					>
						Log In
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
						className="w-full px-4 bg-inherit text-[#C778DD] outline-none border-2 rounded-md placeholder:text-[#4C5151] border-[#474747] py-2"
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
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
