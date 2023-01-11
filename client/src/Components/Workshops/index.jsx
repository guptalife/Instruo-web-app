import { React, useState, useEffect } from "react"
import WorkshopCard from "./WorkshopCard"
import HeroSection from "../Shared/HeroSection"
import axios from "axios"
import Loader from "../Shared/Loader"

const Workshops = () => {
	const [workshops, getWorkshops] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		axios
			.get("/api/v1/workshops", {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				getWorkshops(res.data.workshops)
				setLoading(false)
			})
	}, [])
	return (
		<div>
			<HeroSection
				title={"Workshops"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Workshops",
						url: "",
					},
				]}
			/>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<div className="p-10 mt-32 mb-32 flex flex-wrap gap-10 justify-center">
					{workshops.map((workshop, i) => (
						<WorkshopCard key={i} {...workshop} />
					))}
				</div>
			)}
		</div>
	)
}

export default Workshops
