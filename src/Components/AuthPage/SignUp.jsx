import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"

import { useStateContext } from "../../Contexts/ContextProvider"
import HeroSection from "../Shared/HeroSection"
import logo from "../../assets/logo-static.svg"
import Loader from "../Shared/Loader"

const SignUp = () => {
	const navigate = useNavigate()
	const { showToastHandler } = useStateContext()

	useEffect(() => {
		if (localStorage.getItem("user")) navigate("/")
	}, [navigate])

	return (
		<div className="w-full flex flex-col">
			<HeroSection
				title={"Register"}
				desc={
					""
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Register",
						url: "",
					},
				]}
			/>

			<div className="flex flex-col items-center my-16">
				<div className="flex gap-4 lg:gap-8 justify-center items-center">
					<img src={logo} className="inline" width="10%" />
					<p className="text-4xl lg:text-8xl font-bold">
						Instruo 2k23
					</p>
				</div>
				<div className="lg:w-2/3 mx-4 shadow-xl bg-base-100 border-4 rounded-2xl border-base-200 mt-8 lg:mt-16">
					<div className="card-body">
						<Formik
							initialValues={{
								name: "",
								college: "",
								course: "--",
								graduation_year: "",
								email: "",
								mobile: "",
								password: "",
								cpassword: "",
							}}
							validate={(values) => {
								const errors = {}
								if (values.name.trim() === "")
									errors.name = "Name cannot be empty"

								if (values.college.trim() === "")
									errors.college =
										"Institute name cannot be empty"

								if (values.course === "--")
									errors.course = "Select a valid course name"

								if (!values.graduation_year)
									errors.graduation_year =
										"Select your graduation year"
								if (
									!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
										values.email
									)
								)
									errors.email = "Email invalid"

								if (values.password.trim() === "")
									errors.password = "Password cannot be empty"
								else if (values.password.length < 8)
									errors.password =
										"Password must be atleast 8 characters"

								if (values.password !== values.cpassword)
									errors.cpassword = "Password does not match"

								return errors
							}}
							onSubmit={async (
								values,
								{ setSubmitting, resetForm }
							) => {
								try {
									await axios.post("/api/v1/users/signup", {
										name: values.name,
										college: values.college,
										course: values.course,
										graduation_year: values.graduation_year,
										email: values.email,
										mobile: values.mobile,
										password: values.password,
									})

									setSubmitting(false)
									showToastHandler(
										"Registration successful",
										"success"
									)
									navigate("/login")
								} catch (error) {
									showToastHandler(
										"Registration failed",
										"error"
									)
									console.log(error)
									resetForm()
									setSubmitting(false)
								}
							}}>
							{({ isSubmitting }) => (
								<Form>
									<div className="form-control">
										<label className="label" htmlFor="name">
											Full Name
										</label>
										<Field
											id="name"
											type="text"
											name="name"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="name"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label
											className="label"
											htmlFor="college">
											Institute Name
										</label>
										<Field
											id="college"
											type="text"
											name="college"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="college"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label
											className="label"
											htmlFor="course">
											Course Name
										</label>
										<Field
											id="course"
											name="course"
											className="input input-bordered"
											as="select">
											<option value="--">--</option>
											<option value="B.Arch">
												B.Arch
											</option>
											<option value="BBA">BBA</option>
											<option value="BCA">BCA</option>
											<option value="B.Com">B.Com</option>
											<option value="B.Tech">
												B.Tech
											</option>
											<option value="MBA">MBA</option>
											<option value="M.Tech">
												M.Tech
											</option>
											<option value="PhD">PhD</option>
											<option value="Other">Other</option>
										</Field>
										<ErrorMessage
											name="course"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label className="label">
											Graduation Year
										</label>
										<div className="flex flex-wrap gap-8">
											<label className="flex items-center gap-2">
												<Field
													value="2023"
													type="radio"
													name="graduation_year"
													className="radio radio-primary"
												/>
												2023
											</label>
											<label className="flex items-center gap-2">
												<Field
													value="2024"
													type="radio"
													name="graduation_year"
													className="radio radio-primary"
												/>
												2024
											</label>
											<label className="flex items-center gap-2">
												<Field
													value="2025"
													type="radio"
													name="graduation_year"
													className="radio radio-primary"
												/>
												2025
											</label>
											<label className="flex items-center gap-2">
												<Field
													value="2026"
													type="radio"
													name="graduation_year"
													className="radio radio-primary"
												/>
												2026
											</label>
										</div>
										<ErrorMessage
											name="graduation_year"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label
											className="label"
											htmlFor="mobile">
											Mobile Number
										</label>
										<Field
											id="mobile"
											type="tel"
											maxLength="10"
											name="mobile"
											className="input input-bordered"
										/>
									</div>

									<div className="form-control">
										<label
											className="label"
											htmlFor="email">
											Email
										</label>
										<Field
											id="email"
											type="email"
											name="email"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="email"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label className="label">
											Password
										</label>
										<Field
											id="password"
											type="password"
											name="password"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="password"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control">
										<label className="label">
											Confirm Password
										</label>
										<Field
											id="cpassword"
											type="password"
											name="cpassword"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="cpassword"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control mt-6 w-40 mx-auto">
										{!isSubmitting ? (
											<button
												type="submit"
												className="btn btn-primary">
												Register
											</button>
										) : (
											<Loader />
										)}
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
