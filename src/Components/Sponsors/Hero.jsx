import React from "react"
import WindMap from "../Anims/WindMap"
import HeroSection from "../Shared/HeroSection"

const Hero = () => {
	return (
		<>
			<HeroSection
				title={"Sponsors"}
				desc={
					"Thanks to all our valuable sponsors for making Instruo a success"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Sponsors",
						url: "",
					},
				]}
			/>
		</>
	)
}

export default Hero
