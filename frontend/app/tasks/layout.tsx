import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
	title: "Tasks",
};

export default function TaskLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
