"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";
import { useGetTasks } from "@/components/hooks/useForm";
import { ITaskForm } from "@/types/types";

const Calendar = () => {
	const [events, setEvents] = useState([]);
	const { data, isError, isPending } = useGetTasks();
	useEffect(() => {
		if (data) {
			const formattedTasks = data.map((task: ITaskForm) => ({
				title: task.topic,
				start: task.date,
			}));
			setEvents(formattedTasks);
		}
	}, [data]);
	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: something happened</span>;
	}

	const renderEventContent = (eventInfo: any) => {
		const title = eventInfo.event.title.replace(/^За\s*/, "");

		return (
			<div className="event-content">
				<i>{title}</i>
			</div>
		);
	};
	return (
		<div className="px-[5%] h-screen flex items-center justify-center text-[#C778DD]">
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				events={events}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,dayGridWeek,dayGridDay",
				}}
				buttonText={{
					today: "Сьогодні",
					month: "Місяць",
					week: "Тиждень",
					day: "День",
				}}
				contentHeight="auto"
				aspectRatio={1.35}
				dayMaxEventRows={true}
				views={{
					month: {
						titleFormat: { year: "numeric", month: "short" },
					},
					week: {
						titleFormat: { year: "numeric", month: "short", day: "numeric" },
					},
					day: {
						titleFormat: { year: "numeric", month: "short", day: "numeric" },
					},
					listMonth: {
						buttonText: "Список",
					},
				}}
				eventContent={renderEventContent}
			/>
		</div>
	);
};

export default Calendar;
