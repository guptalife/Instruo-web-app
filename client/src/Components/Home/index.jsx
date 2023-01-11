import React from "react"
import { useRef } from "react"

import About from "./About"
import Hero from "./Hero"
import Sponsors from "./Sponsors"

const Home = () => {
	const aboutRef = useRef()

	return (
		<>
			<Hero aboutRef={aboutRef} />
			<About aboutRef={aboutRef} />
			{/* <EventCards /> */}
			<Sponsors />
		</>
	)
}

export default Home
