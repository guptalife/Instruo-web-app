import React from "react"

const ContactCard = ({ avatarImg, name, role, linkedinUrl }) => {
	return (
		<div className="text-center">
			{avatarImg ? (
				<img
					className="mask mask-squircle w-44 h-44 object-cover"
					src={avatarImg}
				/>
			) : (
				<div className="mask mask-squircle w-44 h-44 bg-base-200 p-8">
					<svg
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
				</div>
			)}
			<h6 className="mt-2 text-lg text-white">{name}</h6>
			<p>{role}</p>
			<div className="mt-2 flex justify-center gap-3">
				<a href={linkedinUrl} target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						className="fill-current hover:fill-white">
						<path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
					</svg>
				</a>
			</div>
		</div>
	)
}

export default ContactCard
