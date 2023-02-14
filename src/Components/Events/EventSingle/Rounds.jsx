import React from "react"

const Rounds = ({ schedule }) => {
	if (!schedule[0].desc) return <div />
	return (
		<>
			<h2 className="mb-8 text-5xl font-bold text-center">Rounds</h2>
			<ul>
				{schedule.map((round, idx) => (
					<li key={idx}>
						<p className="font-bold text-primary text-lg my-0">
							{round.title}:{" "}
						</p>
						<p className="whitespace-pre-line">{round.desc}</p>
					</li>
				))}
			</ul>
		</>
	)
}

export default Rounds
