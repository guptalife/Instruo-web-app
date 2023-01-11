import { React, useState, useEffect } from "react"
import Register from "./Register"
import WorkshopDetails from "./WorkshopDetails"
import HeroSection from "../../Shared/HeroSection"
import axios from "axios"
import Loader from "../../Shared/Loader"

const WorkshopSingle = ({ workshopId }) => {
	const [workshop, getWorkshop] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		axios
			.get(`/api/v1/workshops/${workshopId}`, {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				getWorkshop(res.data.data.workshop)
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
						title={workshop.title}
						desc={workshop.subtitle}
						breadParams={[
							{
								title: "Instruo",
								url: "/",
							},
							{
								title: "Workshop",
								url: "/workshops",
							},
							{
								title: workshop.title,
								url: "",
							},
						]}
					/>
					<WorkshopDetails {...workshop} />
					<Register />
				</div>
			)}
		</div>
	)
}

export default WorkshopSingle
