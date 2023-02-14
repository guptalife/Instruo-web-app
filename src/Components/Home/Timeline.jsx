import React from "react"

const Timeline = () => {
	return (
		<div className="px-4 py-16 flex flex-col bg-base-100">
			<h2 className="text-5xl font-extrabold text-center my-8 md:text-6xl">
				Our Timeline
			</h2>
			<ul className="steps steps-vertical lg:steps-horizontal mt-8">
				<li className="step step-primary" data-content="✓">
					Inaugration Ceremony
				</li>
				{/* <li className="step" data-content="✓">
					Inaugration Ceremony
				</li> */}
				<li className="step step-primary" data-content="✓">
					Day 1 Events
				</li>
				<li className="step step-primary" data-content="✓">
					Day 2 Events
				</li>
				<li className="step step-primary" data-content="✓">
					Day 3 Events
				</li>
				<li className="step step-primary" data-content="✓">
					Closing Ceremony
				</li>
			</ul>
		</div>
	)
}

export default Timeline
