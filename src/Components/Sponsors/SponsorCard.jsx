import React from "react"

const SponsorCard = ({ name, logoUrl }) => {
	return (
		<div className="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1">
			<figure className="px-12 pt-6 pb-2 w-full h-full aspect-[2/1] items-end">
				<img className="w-full" src={logoUrl} alt={name} />
			</figure>
			<div className="card-body text-center">
				<span className="md:text-xl">{name}</span>
			</div>
		</div>
	)
}

export default SponsorCard
