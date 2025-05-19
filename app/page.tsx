'use client'

import FaqForm from "@/components/forms/FaqSection"

export default function HomePage() {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-8 space-y-10 text-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 overflow-x-hidden">
      
      {/* Hi Res Pano */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg py-10 text-lg font-medium">
        Hi Res Pic Pano
      </div>

      {/* Philosophy Section */}
      <p className="max-w-prose mx-auto px-2 text-gray-700 dark:text-gray-300 break-words">
        Our philosophy is simple: Combine earth elements, experienced craftsmen with the right amount of time and you will produce quality gabions. Never compromise in these areas and you will be able to replicate great work consistently.
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
        <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Why CRAFT Gabion?</h2>
        <p className="text-sm italic text-gray-700 dark:text-gray-300">Idealistic. Independent. Innovative.</p>
        <p className="max-w-prose mx-auto mt-2 text-sm text-gray-700 dark:text-gray-300 break-words">
          Our decision to form a company and enter into an extremely competitive market in an uncertain economic environment was nothing less than an act of faith…based on our firm belief that we could deliver a differentiated product in a differentiated manner without diverging from the traditions of our craft.
        </p>
      </div>

      {/* Testimonials */}
      <div className="text-left max-w-prose mx-auto px-2">
        <div className="flex items-start gap-2 flex-wrap">
          <input type="checkbox" checked readOnly className="mt-1" />
          <div>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Customer Testimonials:</span><br />
            <em className="text-gray-600 dark:text-gray-400">
              I DON’T HAVE ANY TESTIMONIALS YET<br />I CAN GET PEOPLE TO?
            </em>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-prose mx-auto text-left px-2">
        <h3 className="text-center font-semibold text-lg mt-6 mb-2 text-gray-900 dark:text-white">
          Our Values
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-800 dark:text-gray-200 text-sm">
          <li>We don’t cut corners. Everything is done as if it were our own home project.</li>
          <li>Our work is done respectfully and in an organized fashion.</li>
          <li>We bid jobs within 49-hours. Need the extra 1 hour.</li>
        </ol>
      </div>

      {/* Calendly */}
      <div className="text-center px-2">
        <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm break-words">calendly.com/craftgabion</p>
        <div className="inline-block border border-gray-300 dark:border-gray-600 rounded shadow max-w-full overflow-hidden">
          <img src="/calendly_placeholder.png" alt="Calendly Screenshot" className="w-full max-w-xs h-auto" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center md:items-start px-2">
        <h3 className="w-full flex justify-center text-center font-semibold text-lg mt-6 mb-2 text-gray-900 dark:text-white">
          FAQ
        </h3>
        <p className="w-full flex justify-center leading-loose p-2 py-4 mb-4 text-center text-sm break-words">
          Explore our frequently asked questions to learn more about gabion design, installation, durability, and what to expect when working with us.
        </p>

        <div className="w-full flex justify-center">
          <FaqForm />
        </div>
      </div>
    </div>
  )
}