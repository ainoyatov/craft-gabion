'use client'

import { NavLinks, MobileLinks } from '@/constants'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function HeaderMenu() {

    const pathname = usePathname()
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev)

    return (
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center max-w-full overflow-hidden">
                        <svg
                            className="h-10 w-full max-w-[180px]"
                            viewBox="0 0 220 70"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMinYMid meet"
                        >
                            {/* CRAFT */}
                            <text
                            x="0"
                            y="30"
                            fontSize="24"
                            fontWeight="bold"
                            className="fill-gray-900 dark:fill-gray-200"
                            >
                            CRAFT
                            </text>

                            {/* | */}
                            <text
                            x="80"
                            y="30"
                            fontSize="24"
                            fontWeight="bold"
                            className="fill-gray-500 dark:fill-gray-400"
                            >
                            |
                            </text>

                            {/* Gabion */}
                            <text
                            x="95"
                            y="30"
                            fontSize="24"
                            fontWeight="bold"
                            className="fill-gray-500 dark:fill-gray-400"
                            >
                            Gabion
                            </text>

                            {/* Tagline */}
                            <text
                            x="0"
                            y="55"
                            fontSize="10"
                            className="fill-gray-700 dark:fill-gray-200"
                            >
                            Earth Elements. Talent. Time.
                            </text>
                        </svg>
                    </Link>
                    

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex space-x-6 items-center">
                        {NavLinks.map((link: any) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-md font-medium ${
                            pathname === link.href
                                ? 'text-gray-900 dark:text-white'
                                : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
                            }`}
                        >
                            {link.label}
                        </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <button
                        onClick={toggleMobileMenu}
                        type="button"
                        aria-label="Toggle mobile menu"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                        {isMobileOpen ? (
                            <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                            </svg>
                        )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileOpen && (
                <nav className="sm:hidden px-4 pb-4" role="menu">
                    {MobileLinks.map((menu: any) => (
                        <Link
                            key={menu.label}
                            href={menu.href}
                            onClick={() => setIsMobileOpen(false)} // 👈 collapses menu
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            {menu.label}
                        </Link>
                        ))}
                </nav>
            )}
        </header>
    )
}