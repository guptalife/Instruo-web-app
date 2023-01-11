import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from "axios"

import { useStateContext } from "../../Contexts/ContextProvider"
import HeroSection from "../Shared/HeroSection"
import logo from "../../assets/logo-static.svg"
import Loader from "../Shared/Loader"

const SignUp = () => {
	return (
		<div>
			<HeroSection
				title={"Register"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
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

			<div className="flex flex-col items-center p-5">
				<div className="my-8 flex gap-4 justify-center">
					<img src={logo} className="inline" width="10%" />
					<p className="text-9xl font-bold">Instruo 2k23</p>
				</div>
				<div className="w-2/3 shadow-2xl bg-base-100 border-4 rounded-xl border-base-200">
					<div className="card-body">
						<Formik
							initialValues={{
								name: "",
								college: "",
								course: "",
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

								if (values.course.trim() === "")
									errors.course =
										"Course name cannot be empty"

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

								if (values.password !== values.cpassword)
									errors.cpassword = "Password does not match"

								return errors
							}}
							onSubmit={async (values, {}) => {
								try {
								} catch (error) {
									showToastHandler("Login failed", "error")
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
											type="text"
											name="course"
											className="input input-bordered"
										/>
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
											maxlength="10"
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
