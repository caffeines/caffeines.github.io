import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>© {currentYear} Abu Sadat Md. Sayem. All Rights Reserved.</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://www.linkedin.com/in/sadatsayem/"
                            className={"transition-colors text-gray-300 hover:text-white hover:bg-gray-200 px-2 py-1 hover:dark:bg-gray-800 hover:dark:text-gray-300 hover:rounded-sm"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/caffeines"
                            className={"transition-colors text-gray-300 hover:text-white hover:bg-gray-200 px-2 py-1 hover:dark:bg-gray-800 hover:dark:text-gray-300 hover:rounded-sm"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://blog.sadat.me"
                            className={"transition-colors text-gray-300 hover:text-white hover:bg-gray-200 px-2 py-1 hover:dark:bg-gray-800 hover:dark:text-gray-300 hover:rounded-sm"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
