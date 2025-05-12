'use client'

import { NavLinks, MobileLinks, FooterLinks } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderMenu () {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    const handleClickMobile = () => {
        setIsMobile(() => !isMobile);
    }

    return (
        <div className="w-full">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    {/* Desktop Menu */}
                    <div className="flex flex-1 items-center justify-between">
                        <a className="flex" href="/">
                        <svg width="500" height="100" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="35" className="text-4xl font-bold fill-gray-900">CRAFT</text>
                            <text x="120" y="35" className="text-4xl font-bold fill-gray-500">| Gabion</text>
                            <text x="0" y="60" className="text-xs mt-1 fill-gray-700">Earth Elements. Talent. Time.</text>
                        </svg>
                            {/* <Image 
                                src="/gabion_logo.svg"
                                alt="company logo"
                                width={150}
                                height={1}
                                className="block"
                            /> */}
                        </a>

                        <div className="flex items-center">
                            <div className="flex">
                                <ul className="flex max-sm:hidden">
                                    {NavLinks.map((links) => {
                                        const isActive = pathname === links.href;
                                        return(
                                            <li
                                                key={links.label}
                                                className="px-2"
                                            >
                                                <Link
                                                    href={links.href}
                                                >
                                                    {links.label}
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                    
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Mobile Menu */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={handleClickMobile}
                            type="button"
                            className="relative ml-1 inline-flex items-center justify-center border border-white rounded-md p-2 text-gray-900 dark:text-gray-200 action:bg-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {
                                isMobile ? (
                                    <div>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div>
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </div>
                                )
                            }
                        </button>
                    </div>

                </div>

            </div>

            {isMobile ? (
                <div>
                    {MobileLinks.map((menu) => (
                        <a
                            key={menu.label}
                            href={menu.href}
                            className="block rounded-md p-2 text-base font-medium hover:bg-gray-300"
                        >
                            {menu.label}
                        </a>
                    ))}
                </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}
