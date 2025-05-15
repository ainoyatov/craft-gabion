export default function GalleryPage() {
  
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <h2 className="text-center text-lg font-semibold mb-12">
        Gabion Work in Action – Explore Our Craft
      </h2>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {['Gallery Pic 1', 'Gallery Pic 2', 'Gallery Pic 3', 'Gallery Pic 4', 'Gallery Pic 5', 'Gallery Pic 6'].map((label, idx) => (
          <div key={idx} className="w-full h-40 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            {label}
          </div>
        ))}
      </section>

      <p className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400">More images coming soon as projects are completed.</p>
    </main>
  )
}