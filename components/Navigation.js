/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import React from "react"
import ThemeSwitch from "./Theme";
import { Navbar } from "flowbite-react";
import { useRouter } from 'next/router';

const Nav = () => {
    const btnClass = "font-medium tracking-wider transition-color hover:font-bold text-gray-600 dark:text-gray-200 hover:text-gray-900 uppercase dark:hover:text-white";
    const history = useRouter();

    const getBtnCssClass = (path) => {
        if (history.pathname === path) {
            return btnClass + " text-white bg-gray-100 text-black dark:text-white dark:bg-slate-900 rounded-md px-3 py-2";
        }
        return btnClass;
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}

            className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black max-w-4xl mx-auto"
        >
            <Navbar.Brand>
                <Link href="/">
                    <a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        SADAT SAYEM
                    </a>
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <ThemeSwitch />
                <Navbar.Toggle className="-mt-1"/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link href="/experience">
                        <a className={getBtnCssClass("/experience")}>
                            Experience
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/skills">
                        <a className={getBtnCssClass("/skills")}>
                            Skills
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/projects">
                        <a className={getBtnCssClass("/projects")}>
                            Projects
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/certifications">
                        <a className={getBtnCssClass("/certifications")}>
                            Certifications
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/blogs">
                        <a className={getBtnCssClass("/blogs")}>
                            Blogs
                        </a>
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-color hover:text-yellow-500 uppercase"}
                    >
                        Sadat Sayem
                    </a>
                </Link>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Nav;