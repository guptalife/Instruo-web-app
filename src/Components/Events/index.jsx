import { React, useState, useEffect } from "react"
import HeroSection from "../Shared/HeroSection"
import axios from "axios"
import Loader from "../Shared/Loader"
import EventsShowcase from "./EventsShowcase"

const Events = () => {
	const [events, setEvents] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios
			.get("/api/v1/events", {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				setEvents(res.data.events)
				setLoading(false)
			})
	}, [])

	return (
		<div>
			<HeroSection
				title={"Events"}
				desc={""}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Events",
						url: "",
					},
				]}
			/>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<EventsShowcase events={events} />
			)}
		</div>
	)
}

export default Events
