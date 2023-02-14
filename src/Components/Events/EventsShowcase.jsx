import React, { useEffect, useState } from "react"
import EventCard from "./EventCard"

const EventsShowcase = ({ events }) => {
	const [visibleEvents, setVisibleEvents] = useState([])
	const [tabActive, setTabActive] = useState(1)

	useEffect(() => {
		setVisibleEvents(events)
	}, [])

	const handleTabChange = (tabNo) => {
		if (tabNo === 1) {
			setVisibleEvents(events)
			setTabActive(1)
		} else if (tabNo === 2) {
			setVisibleEvents(
				events.filter((e) => e.category === "Automation Event")
			)
			setTabActive(2)
		} else if (tabNo === 3) {
			setVisibleEvents(
				events.filter((e) => e.category === "General Event")
			)
			setTabActive(3)
		} else if (tabNo === 4) {
			setVisibleEvents(
				events.filter((e) => e.category === "Technical Event")
			)
			setTabActive(4)
		} else if (tabNo === 5) {
			setVisibleEvents(
				events.filter((e) => e.category === "Gaming Event")
			)
			setTabActive(5)
		}
	}

	return (
		<div>
			<div className="tabs tabs-boxed flex justify-center">
				<a
					className={`tab ${tabActive === 1 ? "tab-active" : ""}`}
					onClick={() => handleTabChange(1)}>
					All Events
				</a>
				<a
					className={`tab ${tabActive === 2 ? "tab-active" : ""}`}
					onClick={() => handleTabChange(2)}>
					Automation Events
				</a>
				<a
					className={`tab ${tabActive === 3 ? "tab-active" : ""}`}
					onClick={() => handleTabChange(3)}>
					General Events
				</a>
				<a
					className={`tab ${tabActive === 4 ? "tab-active" : ""}`}
					onClick={() => handleTabChange(4)}>
					Technical Events
				</a>
				<a
					className={`tab ${tabActive === 5 ? "tab-active" : ""}`}
					onClick={() => handleTabChange(5)}>
					Gaming Events
				</a>
			</div>
			<div className="p-10 pb-32 pt-16 flex flex-wrap gap-10 justify-center">
				{visibleEvents.map((event, i) => (
					<EventCard key={i} {...event} />
				))}
			</div>
		</div>
	)
}

export default EventsShowcase
