
import Link from "next/link"
import React from "react"
import { useState } from 'react';
import ThemeSwitch from "./Theme";

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

export default Navigation;