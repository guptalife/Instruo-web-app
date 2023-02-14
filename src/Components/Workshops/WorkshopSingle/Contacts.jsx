import React from "react"

const Contacts = ({ contacts }) => {
	return (
		<>
			<h2 className="mb-8 text-5xl font-bold text-center">Contact</h2>
			<div className="flex flex-col lg:flex-row justify-around">
				{contacts.map((contact, idx) => (
					<div key={idx}>
						<h4 className="text-xl">{contact.name}</h4>
						<p className="pl-1">
							<span>
								{"Phone: "}
								<a href={`tel: ${contact.phone}`}>
									+{contact.phone}
								</a>
							</span>
							<br />
							{contact.email && (
								<span>
									{"Email: "}
									<a href={`mailto: ${contact.email}`}>
										{contact.email}
									</a>
								</span>
							)}
						</p>
					</div>
				))}
			</div>
		</>
	)
}

export default Contacts
