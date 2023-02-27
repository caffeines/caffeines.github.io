import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import { BiMailSend } from "react-icons/bi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImBlog } from "react-icons/im"
import { about } from "../configs"

const About = () => {
	const handleContactClick = (link) => {
			window.open(link)
	}
	const { name, jobDescription, company, description, opening } = about;

	return (
		<div className="container px-4 mx-auto leading-7">
			<div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
				<div className="lg:px-4 lg:mt-12 ">
					<h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
							Hey there,
					</h1>
					<div className="mt-6 text-gray-800 dark:text-white">
						<div className="mb-4">
							I&apos;m <b>{name}</b>, {jobDescription}
							<a href={company.link} target="_blank" rel="noreferrer" className={"transition-colors hover:text-yellow-500 font-medium"}> { company.name}</a>
							<br></br>
							<br></br>
							{description}
							<br></br>
							<br></br>
							{opening}
							</div>
						</div>
					</div>
					<div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
						<Image
								src={profile}
								alt="Profile"
								priority={true}
								className="rounded-md hover:scale-150 transition-all duration-500 ease-in-out transform:hover"
								width={270}
								height={270}
								placeholder="blur"
					/>
					<div className="mt-10 flex w-auto justify-center lg:justify-start">
						<button
							className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
							onClick={() => handleContactClick("https://github.com/caffeines")}>
							<FaGithub className="inline-block mr-1 text-2xl" />
						</button>
						<button
							className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
							onClick={() => handleContactClick("https://www.linkedin.com/in/sadatsayem/")}>
							<FaLinkedin className="inline-block mr-1 text-2xl" />
						</button>
						<button
							className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
							onClick={() => handleContactClick("https://blog.sadat.me")}>
							<ImBlog className="inline-block mr-1 text-2xl" />
						</button>
						<button
							className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
							onClick={() => handleContactClick("mailto:sadat.talks@gmail.com")}
						>
							<BiMailSend className="inline-block mr-2 text-3xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;