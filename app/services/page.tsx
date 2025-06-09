export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">

      <h2 className="text-center text-lg font-semibold mb-12">
        Strength Meets Aesthetics – Custom Gabion Solutions for Every Need.
      </h2>

      <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {[
          {
            title: 'Custom Gabion Design',
            imgLabel: 'Pic 1',
            desc: 'We tailor gabion structures to meet your aesthetic and functional goals, whether it’s for landscape art, water features, or custom architectural accents.',
          },
          {
            title: 'Fencing & Enclosures',
            imgLabel: 'Pic 2',
            desc: 'Gabion fencing offers privacy, durability, and a natural look using rock or recycled materials—ideal for residential and commercial boundaries.',
          },
          {
            title: 'Retaining Walls',
            imgLabel: 'Pic 3',
            desc: 'Our gabion retaining walls provide strong, flexible support for sloped terrain, helping prevent erosion while blending into natural surroundings.',
          },
          {
            title: 'Large-Scale Commercial Gabions',
            imgLabel: 'Pic 4',
            desc: 'Engineered for strength and scalability, these gabions serve infrastructure, highways, flood control, and industrial projects that demand rugged performance.',
          },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <h3 className="font-medium text-base text-blue-600 dark:text-blue-400 mb-3">
              ◆ {item.title}
            </h3>
            <div className="w-40 h-28 border border-gray-300 dark:border-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center text-gray-500 dark:text-gray-400">
              {item.imgLabel}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Calendly */}
      <section className="mt-16 text-center">
        <div className="text-center px-2">
          <h3 className="text-center font-semibold text-lg m-4 text-gray-900 dark:text-white">
            Schedule Appointment
          </h3>
          <a href="/appointment" className="inline-block border border-gray-300 dark:border-gray-600 rounded shadow max-w-full overflow-hidden">
            <img src="/calendly_placeholder.png" alt="Calendly Screenshot" className="w-full max-w-xs h-auto" />
          </a>
        </div>
      </section>
    </main>
  )
}