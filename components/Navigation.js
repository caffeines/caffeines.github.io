/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import React from "react"
import { useState } from 'react';
import ThemeSwitch from "./Theme";
import { Navbar, Button } from "flowbite-react";

const Nav = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}

            className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black max-w-4xl mx-auto"
        >
            <Navbar.Brand>
                <Link href="/">
                    <a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Sadat Sayem
                    </a>
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <ThemeSwitch />
                <Navbar.Toggle className="-mt-1"/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link href="/">
                        <a className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                            Home
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/experience">
                        <a className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                            Experience
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/projects">
                        <a className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                            Projects
                        </a>
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link href="/certifications">
                        <a className={"font-medium tracking-wider transition-color hover:text-yellow-500"}>
                            Certifications
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