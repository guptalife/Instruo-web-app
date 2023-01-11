import { React, useState, useEffect } from "react"
import Register from "./Register"
import EventDetails from "./EventDetails"
import HeroSection from "../../Shared/HeroSection"
import axios from "axios"
import Loader from "../../Shared/Loader"

const EventSingle = ({ eventId }) => {
	const [event, getEvent] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		axios
			.get(`/api/v1/events/${eventId}`, {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				getEvent(res.data.data.event)
				setLoading(false)
			})
	}, [])

	return (
		<div>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<div>
					<HeroSection
						title={event.title}
						desc={event.subtitle}
						breadParams={[
							{
								title: "Instruo",
								url: "/",
							},
							{
								title: "Events",
								url: "/events",
							},
							{
								title: event.title,
								url: "",
							},
						]}
					/>
					<EventDetails {...event} />
					<Register />
				</div>
			)}
		</div>
	)
}

export default EventSingle
