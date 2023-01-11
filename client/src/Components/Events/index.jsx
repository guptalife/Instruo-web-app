import { React, useState, useEffect } from "react"
import HeroSection from "../Shared/HeroSection"
import EventCard from "./EventCard"
import axios from "axios"
import Loader from "../Shared/Loader"

const Events = () => {
	const [events, getEvents] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		axios
			.get("/api/v1/events", {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				getEvents(res.data.events)
				setLoading(false)
			})
	}, [])
	return (
		<div>
			<HeroSection
				title={"Events"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
				}
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
				<div className="p-10 py-32 flex flex-wrap gap-10 justify-center">
					{events.map((event, i) => (
						<EventCard key={i} {...event} />
					))}
				</div>
			)}
		</div>
	)
}

export default Events
