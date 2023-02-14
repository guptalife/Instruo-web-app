import React, { useState, useEffect } from "react"
import axios from "axios"
import { useStateContext } from "../../Contexts/ContextProvider"

import HeroSection from "../Shared/HeroSection"
import Loader from "../Shared/Loader"
import { Link } from "react-router-dom"

const Profile = () => {
	const { loginUser, showToastHandler } = useStateContext()
	const [userDetails, setUserDetails] = useState({})
	const [loading, setLoading] = useState(true)

	async function getUserDetails() {
		try {
			const { data: res } = await axios.post(
				"/api/v1/users",
				{
					id: loginUser._id,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				}
			)

			// console.log(res)
			setUserDetails({ ...res.user })
			setLoading(false)
		} catch (error) {
			console.log(error)
			setUserDetails(loginUser)
			setLoading(false)
			// console.log(loginUser)
			showToastHandler(
				"User update failed. Showing older data",
				"warning"
			)
		}
	}

	useEffect(() => {
		getUserDetails()
	}, [])


	return (
		<div className="w-full flex flex-col">
			<HeroSection
				title={"Your Profile"}
				desc={
					"Your profile and registrations at a glance"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Profile",
						url: "",
					},
				]}
			/>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<div className="m-8 my-24 shadow-xl border-2 border-gray-800 p-8 lg:px-16 max-w-screen-xl xl:mx-auto rounded-2xl">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
						<div className="px-2">
							<p className="text-4xl lg:text-5xl font-extrabold text-center break-words">
								{userDetails.name}
							</p>
							<p className="text-3xl font-bold mt-4 break-words">
								{userDetails.college.toUpperCase()}
							</p>
							<p className="text-2xl break-words">
								{userDetails.course.toUpperCase()}
							</p>
							<p className="text-lg mt-4">
								Phone: {userDetails.mobile}
							</p>
							<p className="text-lg break-all">
								Email: {userDetails.email}
							</p>
						</div>
						<div className="avatar placeholder md:-translate-y-2/3 -translate-y-1/3">
							<div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-gray-800">
								<span className="text-4xl">
									{userDetails.name.match(/\b(\w)/g).join("")}
								</span>
							</div>
						</div>
					</div>
					<h3 className="my-6 text-3xl text-center font-bold underline">
						Registered Events
					</h3>
					{userDetails.events.length > 0 ? (
						<div className="overflow-x-auto mt-8">
							<table className="table table-zebra w-full">
								<thead>
									<tr>
										<th></th>
										<th>Name</th>
										<th>Team Name</th>
										<th>Details</th>
									</tr>
								</thead>
								<tbody>
									{userDetails.events.map((ev, i) => (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{ev.eventId.title}</td>
											{ev.eventId.type ===
											"Individual" ? (
												<td>Solo event</td>
											) : (
												<td>{ev.teamId.teamName}</td>
											)}
											<td>
												<Link
													className="btn btn-sm btn-primary"
													to={`/events/${ev.eventId.eventId}`}>
													Details
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<div className="text-center my-4">
							Not registered for any events
						</div>
					)}
					<h3 className="my-6 text-3xl text-center font-bold underline">
						Registered Workshops
					</h3>
					{userDetails.workshops.length > 0 ? (
						<div className="overflow-x-auto mt-8">
							<table className="table table-zebra w-full">
								<thead>
									<tr>
										<th></th>
										<th>Name</th>
										<th>Category</th>
										<th>Details</th>
									</tr>
								</thead>
								<tbody>
									{userDetails.workshops.map((wrk, i) => (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{wrk.title}</td>
											<td>{wrk.subtitle}</td>

											<td>
												<Link
													className="btn btn-sm btn-primary"
													to={`/workshops/${wrk.workshopId}`}>
													Details
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<div className="text-center my-4">
							Not registered for any workshops
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Profile
