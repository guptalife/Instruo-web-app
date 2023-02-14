import React, { useState } from "react"

import HeroSection from "../Shared/HeroSection"
import ContactCard from "./ContactCard"

import kshitij from "../../assets/team/kshitij.jpg"
import arnab from "../../assets/team/arnab.jfif"
import rangan from "../../assets/team/rangan.jfif"
import rajesh from "../../assets/team/rajesh.jfif"
import nishita from "../../assets/team/nishita.jpg"
import shubham from "../../assets/team/shubham.jpg"

import devanshu from "../../assets/team/devanshu.jpg"
import sudo from "../../assets/team/sudo.jpeg"
import debopriya from "../../assets/team/debopriya.jpeg"
import aditya from "../../assets/team/aditya.jpeg"

import bhavesh from "../../assets/team/bhavesh.jfif"
import adityaRay from "../../assets/team/adityaRay.jpeg"
import prajwal from "../../assets/team/prajwal.jfif"
import shivam from "../../assets/team/shivam.jfif"
import jainendra from "../../assets/team/jainendra.jpg"
import ayan from "../../assets/team/ayan.jpg"
import souvik from "../../assets/team/souvik.jpg"
import moulindu from "../../assets/team/moulindu.jpg"

import vivek from "../../assets/team/vivek.jpg"
import tannistha from "../../assets/team/tannistha.jpg"
import ashutosh from "../../assets/team/ashutosh.jpg"
import arindom from "../../assets/team/arindom.jpg"
import tiyasa from "../../assets/team/tiyasa.jpg"
import sarnava from "../../assets/team/sarnava.jpg"
import preet from "../../assets/team/preet.jpg"
import anamitra from "../../assets/team/anamitra.jpg"
import ayush from "../../assets/team/ayush.jpg"
import rohan from "../../assets/team/rohan.jpeg"

const ContactUs = () => {
	const [tabActive, setTabActive] = useState(8)
	return (
		<div>
			<HeroSection
				title={"Contact Us"}
				desc={"The team behind Instruo 12.0"}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Contact Us",
						url: "",
					},
				]}
			/>
			<div className="tabs tabs-boxed flex justify-center">
				<a
					className={`tab ${tabActive === 1 ? "tab-active" : ""}`}
					onClick={() => setTabActive(1)}>
					Main Coordinator
				</a>
				<a
					className={`tab ${tabActive === 2 ? "tab-active" : ""}`}
					onClick={() => setTabActive(2)}>
					Finance
				</a>
				<a
					className={`tab ${tabActive === 3 ? "tab-active" : ""}`}
					onClick={() => setTabActive(3)}>
					Sponsorship
				</a>
				<a
					className={`tab ${tabActive === 4 ? "tab-active" : ""}`}
					onClick={() => setTabActive(4)}>
					TA & Logistics
				</a>
				<a
					className={`tab ${tabActive === 5 ? "tab-active" : ""}`}
					onClick={() => setTabActive(5)}>
					Design Team
				</a>
				<a
					className={`tab ${tabActive === 6 ? "tab-active" : ""}`}
					onClick={() => setTabActive(6)}>
					Publicity Team
				</a>
				<a
					className={`tab ${tabActive === 7 ? "tab-active" : ""}`}
					onClick={() => setTabActive(7)}>
					Event Team
				</a>
				<a
					className={`tab ${tabActive === 8 ? "tab-active" : ""}`}
					onClick={() => setTabActive(8)}>
					Technical Team
				</a>
			</div>
			{tabActive === 1 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={bhavesh}
						name="Bhavesh Sonkar"
						linkedinUrl="https://www.linkedin.com/in/bhavesh-sonkar-3a0122201/"
					/>
					<ContactCard
						avatarImg={nishita}
						name="Nishita Chaudhari"
						linkedinUrl="https://www.linkedin.com/in/nishita-chaudhuri-14751319b/"
					/>
					<ContactCard
						avatarImg={adityaRay}
						name="Aditya Kumar Ray"
						linkedinUrl="https://www.linkedin.com/in/aditya-kumar-ray/"
					/>
				</div>
			)}
			{tabActive === 2 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={prajwal}
						name="Prajwal Nakade"
						linkedinUrl="https://www.linkedin.com/in/prajwal-nakade-0971981aa/"
					/>
					<ContactCard
						avatarImg={shivam}
						name="Shivam Kumar"
						linkedinUrl="https://www.linkedin.com/in/shivam-kumar-2965721ab/"
					/>
					<ContactCard
						avatarImg={jainendra}
						name="Jainendra Kumar Triloki"
						linkedinUrl="https://www.linkedin.com/in/jainendra-kumar-triloki-337432252/"
					/>
				</div>
			)}
			{tabActive === 3 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={kshitij}
						name="Kshitij Gupta"
						linkedinUrl="https://www.linkedin.com/in/kshitij-gupta-900887241/"
					/>
					<ContactCard
						avatarImg={arnab}
						name="Arnab Sharma"
						linkedinUrl="https://www.linkedin.com/in/arnab-sharma-56733118b/"
					/>
				</div>
			)}
			{tabActive === 4 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={shubham}
						name="Shubham Sahai"
						linkedinUrl="https://www.linkedin.com/in/shubham-sahai-716556220/"
					/>
					<ContactCard
						avatarImg={
							"https://media.licdn.com/dms/image/D4D03AQEeIeEmq03NaQ/profile-displayphoto-shrink_200_200/0/1675316354392?e=1681344000&v=beta&t=6KvYXr3ljP_aiQacXYvLAForZU7BhV2sFnc6og8dkyg"
						}
						name="Pulok Haldar"
						linkedinUrl="https://www.linkedin.com/in/pulok-haldar-45292b1b8/"
					/>
				</div>
			)}
			{tabActive === 5 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={ayan}
						name="Ayan Chatterjee"
						linkedinUrl="https://www.linkedin.com/in/ayan-chatterjee-5025481a2/"
					/>
					<ContactCard
						avatarImg={moulindu}
						name="Moulindu Mandal"
						linkedinUrl="https://www.linkedin.com/in/moulindu-mandal-20a728215/"
					/>
				</div>
			)}
			{tabActive === 6 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={rangan}
						name="Rangan Das"
						linkedinUrl="https://www.linkedin.com/in/rangan-das-7550951a5/"
					/>

					<ContactCard
						avatarImg={rajesh}
						name="Rajesh Kr Jaiswar"
						linkedinUrl="https://www.linkedin.com/in/rajesh-jaiswar1810/"
					/>
				</div>
			)}
			{tabActive === 7 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={vivek}
						name="Vivek Rawat"
						linkedinUrl="https://www.linkedin.com/in/vivek-rawat-658517191/"
					/>{" "}
					<ContactCard
						avatarImg={tannistha}
						name="Tannistha Bag"
						linkedinUrl="https://www.linkedin.com/in/tannishtha-bag-255b691b1/"
					/>
					<ContactCard
						avatarImg={ashutosh}
						name="Ashutosh"
						linkedinUrl="https://www.linkedin.com/in/ashutosh-967a871b6/"
					/>
					<ContactCard
						avatarImg={anamitra}
						name="Anamitra Datta"
						linkedinUrl="https://www.linkedin.com/in/anamitra-datta-1690a71b1/"
					/>
					<ContactCard
						avatarImg={arindom}
						name="Arindom Babu"
						linkedinUrl="https://www.linkedin.com/in/arindom-babu-7640751b2/"
					/>
					<ContactCard
						avatarImg={tiyasa}
						name="Tiyasa Khan"
						linkedinUrl="https://www.linkedin.com/in/tiyasa-khan-6109691ab/"
					/>
					<ContactCard
						avatarImg={sarnava}
						name="Sarnava Ghosh"
						linkedinUrl="https://www.linkedin.com/in/sarnava-ghosh/"
					/>
					<ContactCard
						avatarImg={preet}
						name="Preet Yadav"
						linkedinUrl="https://www.linkedin.com/in/preet-yadav-789b78179/"
					/>
					<ContactCard
						avatarImg={souvik}
						name="Souvik Sengupta"
						linkedinUrl="https://www.linkedin.com/in/souvik-sengupta-059a99156/"
					/>
					<ContactCard
						avatarImg={ayush}
						name="Ayush Jaiswal"
						linkedinUrl="https://www.linkedin.com/in/ayush-jaiswal-ab8a491a6"
					/>
					<ContactCard
						avatarImg={rohan}
						name="Rohan Somadder"
						linkedinUrl="https://www.linkedin.com/in/rohan-somadder"
					/>
				</div>
			)}
			{tabActive === 8 && (
				<div className="flex flex-wrap gap-10 p-10 justify-center max-w-7xl mx-auto">
					<ContactCard
						avatarImg={devanshu}
						name="Devanshu Chatterjee"
						linkedinUrl="https://www.linkedin.com/in/devanshu-chatterjee-517645200/"
					/>
					<ContactCard
						avatarImg={sudo}
						name="Suddhabrato Ghosh"
						linkedinUrl="https://www.linkedin.com/in/suddhabrato-ghosh/"
					/>
					<ContactCard
						avatarImg={aditya}
						name="Aditya Das"
						linkedinUrl="https://www.linkedin.com/in/aditya-das-86069b202/"
					/>
					<ContactCard
						avatarImg={debopriya}
						name="Debopriya Roy"
						linkedinUrl="http://www.linkedin.com/in/debopriya-roy"
					/>
					<ContactCard
						name="Dhritin Dutta"
						linkedinUrl="https://www.linkedin.com/in/dhritin-dutta-b94137213/"
					/>
					<ContactCard
						name="Ritwik Mandal"
						linkedinUrl="https://www.linkedin.com/in/ritwik-mandal-3487101a5/"
					/>
					<ContactCard
						avatarImg={
							"https://pps.whatsapp.net/v/t61.24694-24/319718301_6108548152529662_252048190625567867_n.jpg?ccb=11-4&oh=01_AdRGuwUeCvYmNlXcitY0KxkVrYahvYjcsf3W0wcSVaIHvg&oe=63F2FD24"
						}
						name="Abhishek Gupta"
						linkedinUrl="https://www.linkedin.com/in/abhishek-gupta-0176aa1b5/"
					/>
				</div>
			)}
		</div>
	)
}

export default ContactUs
