export default function PricesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Pricing & Project Estimates
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          At CRAFT Gabion, every project is unique. Our pricing reflects the complexity, scale, and customization involved in delivering high-quality gabion structures built to last. We work closely with you to provide accurate estimates based on site conditions, material choices, and the craftsmanship required to bring your vision to life.
        </p>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Estimated Price Ranges</h2>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>Custom Gabion Entryway:</strong> Starting at $3,000 – ideal for residential front yards and walkways.
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>Water Feature Gabion Wall:</strong> $4,500–$8,000 depending on size and plumbing integration.
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>Retaining Walls:</strong> $150–$300 per linear foot (based on height, terrain, and foundation work).
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>Commercial & Infrastructure Installations:</strong> Custom quotes only — scaled to engineering specs and timelines.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">What Affects the Price?</h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
            <li>Project size and site access</li>
            <li>Material selection (stone type, cage finish, drainage components)</li>
            <li>Terrain prep, excavation, and leveling</li>
            <li>Custom features like lighting, integrated seating, or water systems</li>
          </ul>
        </section>

        <section className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Ready for a Custom Quote?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every project starts with a conversation. Tell us about your space, ideas, and budget—and we’ll guide you through the next steps.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
          >
            Contact Us for a Quote
          </a>
        </section>
      </div>
    </main>
  );
}