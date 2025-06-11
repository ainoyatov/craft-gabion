'use client'

import FaqForm from "@/components/forms/FaqSection"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-8 space-y-10 text-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 overflow-x-hidden">

      {/* Hi Res Pano */}
      <div className="bg-[url('/craft_gabion.png')] bg-cover bg-center h-[300px] md:h-[500px]"></div>
      
      {/* Philosophy Section */}
      <h2 className="font-semibold text-2xl mb-2 text-gray-900 dark:text-white">Our philosophy</h2>
      <p className="max-w-prose mx-auto px-2 text-gray-700 dark:text-gray-300 break-words">
        Combine earth elements, experienced craftsmen with the right amount of time and you will produce quality gabions. Never compromise in these areas and you will be able to replicate great work consistently.
      </p>
      {/* Images */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {['Pic 1', 'Pic 2', 'Pic 3'].map((label, i) => (
          <div
            key={i}
            className="w-20 sm:w-24 h-20 sm:h-24 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-800 dark:text-gray-100 text-xs"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Why Section */}
      <div className="px-2">
        <h2 className="font-semibold text-2xl mb-2 text-gray-900 dark:text-white">Why CRAFT Gabion?</h2>
        <p className="text-sm italic text-gray-700 dark:text-gray-300">Idealistic. Independent. Innovative.</p>
        <p className="max-w-prose mx-auto mt-2 text-sm text-gray-700 dark:text-gray-300 break-words">
          Our decision to form a company and enter into an extremely competitive market in an uncertain economic environment was nothing less than an act of faith…based on our firm belief that we could deliver a differentiated product in a differentiated manner without diverging from the traditions of our craft.
        </p>
      </div>

      {/* Our Values */}
      <div className="max-w-prose mx-auto text-left px-2">
        <h3 className="text-center font-semibold text-2xl mt-6 mb-2 text-gray-900 dark:text-white">
          Our Values
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
          <li>We don’t cut corners. Everything is done as if it were our own home project.</li>
          <li>Our work is done respectfully and in an organized fashion.</li>
          <li>We bid jobs within 49-hours. Need the extra 1 hour.</li>
        </ol>
      </div>
      
      {/* Calendly */}
      <div className="text-center px-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Ready to Schedule Your Appointment?
        </h3>

        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-6 text-base">
          At Craft Gabion, we specialize in custom gabion designs that blend form and function. Whether you're enhancing a landscape or building a feature wall, our team is ready to help you bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/appointment"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2z" />
            </svg>
            Schedule
          </a>

          <a
            href="tel:+16309911305"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M2 5.5C2 4.7 2.7 4 3.5 4h2.6c.7 0 1.3.4 1.5 1l1 2.7a1.6 1.6 0 0 1-.4 1.7l-1.2 1.2a16.5 16.5 0 0 0 6.5 6.5l1.2-1.2a1.6 1.6 0 0 1 1.7-.4l2.7 1a1.6 1.6 0 0 1 1 1.5v2.6c0 .8-.7 1.5-1.5 1.5A19.5 19.5 0 0 1 2 5.5z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center md:items-start px-2">
        <h3 className="w-full flex justify-center text-center font-semibold text-2xl m-4 mb-2 text-gray-900 dark:text-white">
          FAQ
        </h3>
        <p className="w-full flex justify-center leading-loose p-2  mb-4 text-center text-sm break-words">
          Explore our frequently asked questions to learn more about gabion design, installation, durability, and what to expect when working with us.
        </p>

        <div className="w-full flex justify-center">
          <FaqForm />
        </div>
      </div>
    </div>
  )
}