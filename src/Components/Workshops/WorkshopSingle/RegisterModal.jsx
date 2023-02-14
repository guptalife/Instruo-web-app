import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Loader from "../../Shared/Loader"
import { useStateContext } from "../../../Contexts/ContextProvider"

const RegisterModal = ({ workshopId }) => {
	const { loginUser, showToastHandler } = useStateContext()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	const registerIndividual = async () => {
		setLoading(true)
		try {
			await axios.post(
				"/api/v1/workshops/register",
				{
					workshopId: workshopId,
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

	return (
		<>
			<h3 className="font-bold text-lg">Confirm Registration</h3>
			<p className="py-4">
				Are you sure you want to register for this workshop?
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
}

export default RegisterModal
