export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">

      <h2 className="text-center text-2xl font-semibold mb-12">
        Strength Meets Aesthetics – Custom Gabion Solutions for Every Need.
      </h2>

      <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[
          {
            title: 'Custom Gabion Design',
            imgSrc: '/craft_gabion_thumbnails_1.png',
            desc: 'We tailor gabion structures to meet your aesthetic and functional goals, whether it’s for landscape art, water features, or custom architectural accents.',
          },
          {
            title: 'Fencing & Enclosures',
            imgSrc: '/craft_gabion_thumbnails_2.png',
            desc: 'Gabion fencing offers privacy, durability, and a natural look using rock or recycled materials—ideal for residential and commercial boundaries.',
          },
          {
            title: 'Retaining Walls',
            imgSrc: '/craft_gabion_thumbnails_3.png',
            desc: 'Our gabion retaining walls provide strong, flexible support for sloped terrain, helping prevent erosion while blending into natural surroundings.',
          },
          {
            title: 'Large-Scale Commercial Gabions',
            imgSrc: '/craft_gabion_thumbnails_4.png',
            desc: 'Engineered for strength and scalability, these gabions serve infrastructure, highways, flood control, and industrial projects that demand rugged performance.',
          },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2 tracking-tight">
              <span className="mr-1 text-blue-500"></span>
              {item.title}
            </h3>
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-40 h-28 object-cover border border-gray-300 dark:border-gray-600 rounded-lg mx-auto mb-3"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>


      {/* Calendly */}
      <div className="text-center px-4 py-12">
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
    </main>
  )
}