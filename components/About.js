import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"
import { BiMailSend } from "react-icons/bi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ImBlog } from "react-icons/im"

const About = () => {
    const handleContactClick = (link) => {
        window.open(link)
    }
    return (
			<div className="container px-4 mx-auto leading-7">
				<div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
						<div className="lg:px-4 lg:mt-12 ">
								<h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
										Hey there,
								</h1>
								<div className="mt-6 text-gray-800 dark:text-white">
										<div className="mb-4">
										I&apos;m <b>Abu Sadat Md. Sayem</b>, a software developer from Bangladesh. Currently working as a Senior Software Engineer at 
										<a href="https://durbinlabs.com/" target="_blank" rel="noreferrer" className={"transition-colors hover:text-yellow-500 font-medium"}> Durbin Labs Ltd. </a>. 
										<br></br>
										<br></br>
										I have over 3 years of scalable software design and development experience. In this time I have developed applications 
										on different verticals including messaging, audio/video streaming, EdTech, HealthTech and so on.
										<br></br>
										<br></br>
										I&apos;m looking for a backend system development opportunity using Golang/Node.js
												
								</div>
							</div>
						</div>
						<div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
							<Image
									src={profile}
									alt="Profile"
									priority={true}
									className="rounded-full"
									width={250}
									height={250}
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