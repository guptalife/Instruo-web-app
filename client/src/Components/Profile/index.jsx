import React from "react"
import HeroSection from "../Shared/HeroSection"
import { useStateContext } from "../../Contexts/ContextProvider"

const randomUser = {
	name: "Devanshu Chatterjee",
	email: "devanshu4190@gmail.com",
	mobile: "7355164558",
	college: "IIEST, Shibpur",
	course: "B.Tech (IT)",
	graduation_year: "2024",
	events: [],
}
const Profile = () => {
	const { loginUser } = useStateContext()

	return (
		<div>
			<HeroSection
				title={"Your Profile"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
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
			<div className="p-8">
				<div className="flex items-center justify-center gap-8 border-4">
					<div className="avatar placeholder">
						<div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-gray-800">
							<span className="text-3xl">
								{randomUser.name.match(/\b(\w)/g).join("")}
							</span>
						</div>
					</div>
					<div>
						<p className="text-5xl font-extrabold">
							{randomUser.name}
						</p>
						<p className="text-3xl font-bold mt-4">
							{randomUser.college.toUpperCase()}
						</p>
						<p className="text-2xl">
							{randomUser.course.toUpperCase()}
						</p>
						<p className="text-lg mt-4">
							Phone: {randomUser.mobile}
						</p>
						<p className="text-lg">Email: {randomUser.email}</p>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Profile
