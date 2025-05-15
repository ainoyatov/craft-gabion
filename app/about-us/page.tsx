import Link from 'next/link'

export default function AboutPage() {
  const projects = [
    { title: 'Modern Stone Entryway', slug: 'modern-stone-entryway' },
    { title: 'Water Feature Gabion Wall', slug: 'water-feature-wall' },
    { title: 'Urban Garden Divider', slug: 'urban-garden-divider' },
    { title: 'Commercial Retaining Wall', slug: 'commercial-retaining-wall' },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
        <h2 className="text-center text-2xl font-semibold text-gray-900 dark:text-white">About CRAFT Gabion</h2>

        <p>
          At CRAFT Gabion, we believe in combining natural elements, attention to detail, and craftsmanship to deliver lasting structures that are both functional and beautiful.
        </p>
        <p>
          We’re a small, independent team dedicated to quality over quantity. Every gabion we build reflects a deep respect for our materials, environment, and your vision.
        </p>
        <p>
          From our first sketch to final rock placement, we treat each project as if it were our own. That’s why our values—honesty, craftsmanship, and consistency—guide everything we do.
        </p>

        {/* <div className="text-center mt-10">
          <img src="/team_placeholder.png" alt="Team photo" className="w-72 mx-auto rounded border border-gray-300 dark:border-gray-600" />
        </div> */}
      </div>

      {/* Portfolio Section */}
      <section className="mt-16 max-w-6xl mx-auto px-2">
        <h3 id="portfolio" className="text-xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Our Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block border border-gray-300 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition"
            >
              <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded mb-3 flex items-center justify-center text-gray-400 text-sm">
                Image Placeholder
              </div>
              <h4 className="text-sm font-medium text-center text-gray-800 dark:text-gray-100">{project.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}