import React from "react"
import { OrbitControls } from "@react-three/drei"
import { Link } from "react-router-dom"
import { Canvas } from "react-three-fiber"

import logo from "../../assets/logo.svg"
import HeroAnim from "../Anims/HeroAnim"
import Countdown from "./Countdown"

const Hero = ({ aboutRef }) => {
	return (
		<div className="hero min-h-screen -mt-[5rem] ">
			<div className="hero-overlay">
				<Canvas>
					<HeroAnim />
					<OrbitControls enableZoom={false} enabled={false} />
				</Canvas>
			</div>

			<div className="hero-content text-center pointer-events-none">
				<div className="max-w-md text-white bg-slate-50 backdrop-blur-sm bg-opacity-10 p-5 rounded-lg">
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
					<Countdown />
					<Link to="/events">
						<button className="btn btn-primary pointer-events-auto lg:hidden">
							View Events
						</button>
					</Link>
				</div>
			</div>
			<div
				className="text-white text-lg font-bold bottom-2 absolute animate-bounce cursor-pointer"
				onClick={() => aboutRef.current.scrollIntoView()}>
				click to scroll down
			</div>
		</div>
	)
}

export default Hero
