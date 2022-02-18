import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpeg"

const About = () => {
    const handleContactClick = () => {
        console.log("clicked");
        window.open("mailto:sadat.talks@gmail.com")
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
                        I&apos;m <b>Abu Sadat Md. Sayem</b>, a software developer from Bangladesh. Currently working as a Software Engineer (Backend) at 
                        <a href="https://tigerit.com/" target="_blank" rel="noreferrer"> TigerIT </a>. 
                        <br></br>
                        <br></br>
                        I have over 3 years of scalable software design and development experience. In this time I have developed applications 
                        on different verticals including messaging, audio/video streaming, EdTech, and so on.
                        <br></br>
                        <br></br>
                        {/* I&apos;m looking for a backend system development opportunity using Golang/Python/Node.js */}
                        <div className="mt-10">
                            <button 
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleContactClick}
                            >
                                Contact me 🚀
                            </button>
                        </div>
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
                    {/* <div className="mt-5">
                        Sadat
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About;