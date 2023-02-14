import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"

import Loader from "../../Shared/Loader"
import { useStateContext } from "../../../Contexts/ContextProvider"

const RegisterModal = ({ type, eventId }) => {
	const { loginUser, showToastHandler } = useStateContext()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [teamDetails, setTeamDetails] = useState("")

	const registerIndividual = async () => {
		setLoading(true)
		try {
			await axios.post(
				"/api/v1/events/register",
				{
					eventId: eventId,
					participantId: loginUser._id,
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
			showToastHandler("Individual registration successful", "success")
			setLoading(false)
			navigate(0)
		} catch (error) {
			console.log(error)
			showToastHandler("Individual registration failed", "error")
			setLoading(false)
		}
	}

	if (type === "Individual")
		return (
			<>
				<h3 className="font-bold text-lg">Confirm Registration</h3>
				<p className="py-4">
					Are you sure you want to register for this event?
					<br /> Click Yes to proceed and NO to cancel.
				</p>
				{loading ? (
					<Loader />
				) : (
					<div className="modal-action">
						<label htmlFor="my-modal-6" className="btn">
							No
						</label>
						<button
							className="btn btn-primary"
							onClick={registerIndividual}>
							Yes
						</button>
					</div>
				)}
			</>
		)
	return (
		<>
			<div className="flex flex-col w-full border-opacity-50">
				<div className="grid bg-base-300 rounded-box place-items-center p-4">
					{teamDetails ? (
						<div className="mb-4">
							<p className="font-bold mb-2">
								Share with teammates
							</p>
							<div className="flex justify-between items-center rounded-lg border-2 border-gray-600 bg-base-100 px-4">
								<p className="p-4">{teamDetails.teamId}</p>
								<button
									className="btn btn-ghost"
									onClick={() => {
										navigator.clipboard.writeText(
											teamDetails.teamId
										)
										showToastHandler(
											"Team ID copied",
											"success"
										)
									}}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-clipboard"
										viewBox="0 0 16 16">
										<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
										<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
									</svg>
								</button>
							</div>
						</div>
					) : (
						<Formik
							initialValues={{
								teamName: "",
							}}
							validate={(values) => {
								const errors = {}
								if (!values.teamName)
									errors.teamName = "Required"

								return errors
							}}
							onSubmit={async (values, { setSubmitting }) => {
								try {
									const { data: res } = await axios.post(
										"/api/v1/events/registerTeam",
										{
											eventId: eventId,
											teamName: values.teamName,
											college: loginUser.college,
											participantId: loginUser._id,
										},
										{
											headers: {
												"Content-Type":
													"application/json",
												Authorization: `Bearer ${localStorage.getItem(
													"token"
												)}`,
											},
										}
									)
									// console.log(res)
									setTeamDetails(res)
									setSubmitting(false)
									showToastHandler(
										"Team registration successful",
										"success"
									)
								} catch (error) {
									showToastHandler(
										"Team registration failed",
										"error"
									)
									console.log(error)
									setSubmitting(false)
								}
							}}>
							{({ isSubmitting }) => (
								<Form>
									<div className="form-control w-full">
										<label
											className="label"
											htmlFor="teamName">
											Team name
										</label>
										<Field
											id="teamName"
											type="teamName"
											name="teamName"
											className="input input-bordered"
										/>
										<ErrorMessage
											name="teamName"
											className="label text-sm text-red-500"
											component={"div"}
										/>
									</div>

									<div className="form-control mt-6 w-40 mx-auto">
										{!isSubmitting ? (
											<button
												type="submit"
												className="btn btn-primary">
												Create Team
											</button>
										) : (
											<Loader />
										)}
									</div>
								</Form>
							)}
						</Formik>
					)}
				</div>
				{!teamDetails && (
					<>
						<div className="divider">OR</div>
						<div className="grid bg-base-300 rounded-box place-items-center p-4">
							<Formik
								initialValues={{
									teamId: "",
								}}
								validate={(values) => {
									const errors = {}
									if (!values.teamId)
										errors.teamId = "Required"

									return errors
								}}
								onSubmit={async (values, { setSubmitting }) => {
									try {
										const { data: res } = await axios.post(
											"/api/v1/events/joinTeam",
											{
												eventId: eventId,
												teamId: values.teamId,
												college: loginUser.college,
												participantId: loginUser._id,
											},
											{
												headers: {
													"Content-Type":
														"application/json",
													Authorization: `Bearer ${localStorage.getItem(
														"token"
													)}`,
												},
											}
										)
										// console.log(res)

										setSubmitting(false)
										showToastHandler(
											"Team joining successful",
											"success"
										)
										navigate(0)
									} catch (error) {
										showToastHandler(
											"Team joining failed",
											"error"
										)
										console.log(error)
										setSubmitting(false)
									}
								}}>
								{({ isSubmitting }) => (
									<Form>
										<div className="form-control">
											<label
												className="label"
												htmlFor="teamId">
												Team ID
											</label>
											<Field
												id="teamId"
												type="teamId"
												name="teamId"
												className="input input-bordered"
											/>
											<ErrorMessage
												name="teamId"
												className="label text-sm text-red-500"
												component={"div"}
											/>
										</div>

										<div className="form-control mt-6 w-40 mx-auto">
											{!isSubmitting ? (
												<button
													type="submit"
													className="btn btn-primary">
													Join Team
												</button>
											) : (
												<Loader />
											)}
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default RegisterModal
