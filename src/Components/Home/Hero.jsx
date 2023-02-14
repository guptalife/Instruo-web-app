import React from "react"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router-dom"
import { Canvas } from "react-three-fiber"

import logo from "../../assets/logo.svg"
import HeroAnim from "../Anims/HeroAnim"
import Countdown from "./Countdown"

const Hero = ({ aboutRef }) => {
	return (
		<div className="hero min-h-screen -mt-[5rem]">
			<div className="hero-overlay bg-neutral">
				<Canvas>
					<HeroAnim />
					<OrbitControls enableZoom={false} enabled={false} />
				</Canvas>
			</div>

			<div className="w-[85vw] text-center pointer-events-none flex justify-center items-center">
				<div className="max-w-md text-white bg-slate-50 backdrop-blur-sm bg-opacity-10 p-4 rounded-lg">
					<img
						src={logo}
						className="max-w-sm mx-auto"
						width="25%"
						height="25%"
					/>
					<h1 className="mb-5 text-5xl font-bold">Instruo 2k23</h1>
					<p className="mb-5">
						{
							"Kolkata's largest Techfest organised by IIEST, Shibpur (formerly BESU, Shibpur)"
						}
					</p>
					{/* <Countdown /> */}
					{/* <Link to="/events">
						<button className="btn btn-primary pointer-events-auto lg:hidden">
							View Events
						</button>
					</Link> */}
					<div className="text-xl font-bold uppercase animate-pulse">
						event closed
					</div>
				</div>
			</div>
			<div
				className="text-white text-lg font-semibold bottom-2 absolute animate-bounce cursor-pointer select-none"
				onClick={() => aboutRef.current.scrollIntoView()}>
				<svg
					fill="none"
					stroke="currentColor"
					className="h-8 w-8 mx-auto"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
					/>
				</svg>
				click to scroll down
			</div>
		</div>
	)
}

export default Hero
