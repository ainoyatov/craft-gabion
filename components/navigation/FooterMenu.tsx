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
            <div className="flex-shrink-0 mt-6 md:mt-0">
                <Link href="/" className="flex items-center">
                    <svg
                    className="h-20 w-auto" // Increased from h-10 to h-20
                    viewBox="0 0 500 100"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <text x="0" y="35" className="text-4xl font-bold fill-gray-900">
                        CRAFT
                    </text>
                    <text x="120" y="35" className="text-4xl font-bold fill-gray-500">
                        | Gabion
                    </text>
                    <text x="0" y="60" className="text-xs fill-gray-700">
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