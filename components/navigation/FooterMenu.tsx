'use client'

import Link from 'next/link'
import { FooterLinks } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

            {/* Link Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {FooterLinks.map((section) => (
                <div key={section.title}>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                    {section.links.map((link) => (
                        <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-sm hover:text-gray-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>

            {/* Logo on the Right */}
            <div className="flex-shrink-0 mt-6 md:mt-0 max-w-sm overflow-hidden">
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
            </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Craft | Gabion. All rights reserved.
        </div>

      </div>
    </footer>
  )
}