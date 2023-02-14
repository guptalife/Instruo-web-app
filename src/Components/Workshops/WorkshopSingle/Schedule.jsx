import React from "react"
import moment from "moment"

const Schedule = ({ schedule }) => {
	return (
		<>
			<h2 className="mb-8 text-5xl font-bold text-center">Schedule</h2>
			{schedule.map((round, idx) => (
				<div
					key={idx}
					className="text-xl border-y mb-2 flex flex-col gap-2 p-4 items-center">
					<p className="font-bold text-primary my-0 text-center">
						{round.title}:{" "}
					</p>
					<p className="my-0 text-center">
						{`${moment(round.date, moment.ISO_8601).format(
							"ll"
						)} @ ${round.time}`}
					</p>
					<div className="flex gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<a
							className="link link-hover"
							href={round.locUrl}
							target="_blank">
							{round.venue}
						</a>
					</div>
				</div>
			))}
		</>
	)
}

export default Schedule
