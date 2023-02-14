import { React, useState, useEffect } from "react"
import Register from "./Register"
import WorkshopDetails from "./WorkshopDetails"
import HeroSection from "../../Shared/HeroSection"
import axios from "axios"
import Loader from "../../Shared/Loader"
import { useStateContext } from "../../../Contexts/ContextProvider"

const WorkshopSingle = ({ workshopId }) => {
	const { loginUser } = useStateContext()

	const [workshop, setWorkshop] = useState("")
	const [isRegistered, setIsRegistered] = useState(false)
	const [loading, setLoading] = useState(true)

	const getWorkshopDetails = async () => {
		try {
			let res
			if (loginUser)
				({ data: res } = await axios.post(
					`/api/v1/workshops/${workshopId}`,
					{
						userId: loginUser._id,
					}
				))
			else
				({ data: res } = await axios.post(
					`/api/v1/workshops/${workshopId}`
				))
			// console.log(res)
			setWorkshop(res.data.workshop)
			setIsRegistered(res.data.isRegistered)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getWorkshopDetails()
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
					<div className="">
						<h2 className="mb-8 text-5xl font-bold text-center">
							Registration Status
						</h2>
						{new Date(workshop.endDate) < Date.now() ? (
							<div className="max-w-md mx-auto md:max-w-7xl my-4">
								<div className="alert alert-error shadow-lg">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="stroke-current flex-shrink-0 h-6 w-6"
											fill="none"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<span>This workshop has ended!</span>
									</div>
								</div>
							</div>
						) : (
							<Register
								{...workshop}
								isRegistered={isRegistered}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default WorkshopSingle
