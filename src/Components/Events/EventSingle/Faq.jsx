import React from "react"
import FaqSingle from "./FaqSingle"

const Faq = ({ faq }) => {
	return (
		<div className="mt-20">
			<h2 className="mb-8 text-5xl font-bold text-center">FAQs</h2>
			<div className="mt-10 mb-20 flex flex-col">
				{faq.map((f, idx) => (
					<FaqSingle key={idx} {...f} />
				))}
			</div>
		</div>
	)
}

export default Faq
